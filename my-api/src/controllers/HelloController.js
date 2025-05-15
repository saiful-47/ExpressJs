exports.helloGet = (req, res) => {
    res.status(200).json({ status: "Success", data: "This get request" });
}

exports.helloPost = (req, res) => {
    res.status(201).json({ status: "Success", data: "This post request" });
}

