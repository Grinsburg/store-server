const { cardorders } = require('../../models/cardorder');

class CardService {
    // getAll({ offset = 0, limit = 10 }) {
    //     return cardorder.findAndCountAll({
    //         offset,
    //         limit,
    //     });
    // }
    getAll() {
        return cardorders.findAll()  
    }
}

const cardService = new CardService();

module.exports = {
    cardService,
};
