const { cardorders } = require('../../models/cardorder');

class CardService {
    getAll() {
        return cardorders.findAll();
    }

    getOne({ id }) {
        return cardorders.findOne({ where: { id } });
    }

    create({
        id,
        name,
        code,
        brand,
        weight,
        height,
        width,
        vendorCode,
        country,
        purchasePrice,
        sellPrice,
        length,
        group,
    }) {
        return cardorders.create({
            id,
            name,
            code,
            brand,
            weight,
            height,
            width,
            vendorCode,
            country,
            purchasePrice,
            sellPrice,
            length,
            group,
        });
    }

    updateById({
        id,
        name,
        code,
        brand,
        weight,
        height,
        width,
        vendorCode,
        country,
        purchasePrice,
        sellPrice,
        length,
        group,
    }) {
        return cardorders.update(
            {
                id,
                name,
                code,
                brand,
                weight,
                height,
                width,
                vendorCode,
                country,
                purchasePrice,
                sellPrice,
                length,
                group,
            },
            {
                where: { id },
            }
        );
    }

    deleteById({ id }) {
        return cardorders.destroy({ where: { id } });
    }
}

const cardService = new CardService();

module.exports = {
    cardService,
};
