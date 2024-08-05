export const getRols = (req, res) => {
    res.send('getting rols');
};

export const createRol = (req, res) => {
    console.log(req.body);
    res.send('creating rols');
};