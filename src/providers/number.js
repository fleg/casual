var integer = function(from, to) {
	from = from || Number.MIN_VALUE;
	to   = to || Number.MAX_VALUE;

	return Math.floor(Math.random() * to + from);
};

module.exports = {
	integer: integer,

	digit: function() {
		return integer(0, 9);
	},

	double: function(from, to) {
		from = from || Number.MIN_VALUE;
		to   = to || Number.MAX_VALUE;

		return from + (to - from) * Math.random();
	}
};
