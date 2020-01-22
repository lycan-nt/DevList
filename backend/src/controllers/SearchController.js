const dev = require('../models/dev');

const parseStringAssArray = require('../utils/parseStringAssArray');

module.exports = {
    async index(request, response){
 
        const {latitude, longitude, techs} = request.query;

        const techsArray = parseStringAssArray(techs);

        const devs = await dev.find({
            techs: {
                $in: techsArray,
            },

            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude]
                    },
                    $maxDistance: 10000,
                },
            },
        });

        return response.json({devs});

    },
}