module.exports = app => {
    return {
        findAll: (params, callback) => {
            return callback([
                { title: "Fazer Compras" },
                { title: "Consetar o PC" },
            ]);
        }
    };
};