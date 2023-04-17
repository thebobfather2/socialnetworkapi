const { Thoughts, User } = require('../models');

module.exports = {
    getThoughts(req, res) {
        Thoughts.find()
            .populate({ path: "reactions" })
            .sort({ _id: -1 })
            .then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },

    getSingleThought(req, res) {
        Thoughts.findOne({ _id: req.params.thoughtId })
            .populate({ path: "reactions" })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thoughts with that ID' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err));
    },

    createThought(req, res) {
        Thoughts.create(req.body)
            .then((thoughts) => res.json(thoughts))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },

    deleteThought(req, res) {
        Thoughts.findOneAndDelete({ _id: req.params.thoughtId })
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json({ message: 'Thought deleted!' })
            )
            .catch((err) => res.status(500).json(err))
    },

    updateThought(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((thoughts) =>
                !thoughts
                    ? res.status(404).json({ message: 'No thought with this id!' })
                    : res.json(thoughts)
            )
            .catch((err) => res.status(500).json(err))
    },

    addReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $push: { reactions: req.body } },
            { new: true, runValidators: true }
        )
            .populate({ path: "reactions" })
            .then((thoughtsData) => {
                if (!thoughtsData) {
                    res.status(404).json({ message: "No thoughts with this ID!" });
                    return;
                }
                res.json(thoughtsData);
            })
            .catch((err) => res.status(400).json(err));
    },

    removeReaction(req, res) {
        Thoughts.findOneAndUpdate(
            { _id: req.params.thoughtId },
            { $pull: { reactions: { _id: req.body.id } } },
            { new: true }
        )
            .then((thoughtsData) => {
                if (!thoughtsData) {
                    res.status(404).json({ message: "No thoughts with this ID!" });
                    return;
                }
                res.json(thoughtsData);
            })
            .catch((err) => res.status(400).json(err));
    },
};

