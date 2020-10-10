const getQuote = (req, res) => {
    const quote = 'If a thing is humanly possible, consider it within your reach. - Marcus Aurelius';
    return res.status(200).send(quote);
}

module.exports = getQuote;