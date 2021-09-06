// Dummy repository
const getAll = async() => {
    return [
        {
            users: [
                {
                    id_user: 1,
                    fullname: "John Doe",
                    email: "johndoe@email.test",
                    role: {
                        id_role: 2,
                        role_name: "User"
                    },
                },
                {
                    id_user: 2,
                    fullname: "Jane Doe",
                    email: "janedoe@email.test",
                    role: {
                        id_role: 2,
                        role_name: "User"
                    },
                }
            ]
        }
    ];
};

module.exports = {
    getAll
};
