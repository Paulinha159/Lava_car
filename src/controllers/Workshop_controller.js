import Workshop from "../models/Workshop_model.js";

export const store = async (req, res) => {
    try {
        const content = await Workshop.create(req.body);
        res.status(201).json(content);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const index = async (req, res) => {
    try {
        const content = await Workshop.find(req.query).exec(); // Usar Workshop em vez de Maintenance
        res.json(content);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const show = async (req, res) => {
    try {
        const content = await Workshop.findById(req.params.id) // Usar Workshop aqui também
            .populate("manutencao") // Alterar para a propriedade correta
            .exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const update = async (req, res) => {
    try {
        const content = await Workshop.findByIdAndUpdate(req.params.id, req.body, { new: true }).exec();
        res.json(content);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export const destroy = async (req, res) => {
    try {
        const content = await Workshop.findByIdAndDelete(req.params.id).exec();
        res.json({ message: "Oficina deletada com sucesso", content });
    } catch (error) {
        res.status(400).send(error.message);
    }
};
