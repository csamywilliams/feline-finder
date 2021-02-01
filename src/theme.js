const WHITE = '#FFF';
const VIOLET_GREY = '#696969';
const LIGHT_GREY = '#F4F1EB';
const STEEL_GREY = '#726d7f';
const LILAC_GREY = '#CECCCC';
const PANSY_PURPLE = '#870058';
const VIVID_BURGUNDY = '#A4303F';
const DEEP_CHAMPAGNE = '#F2D0A4';
const BLANCHED_ALMOND = '#FFECCC';
const TEA_GREEN = '#C8D6AF';
const DARK_RED = '#e1261c';

const PRIMARY_COLOR = STEEL_GREY;
const SECONDARY_COLOR = BLANCHED_ALMOND;
const TERTIARY_COLOR = PANSY_PURPLE;
const QUATERNARY_COLOR = VIVID_BURGUNDY;

const VALIDATION_ERROR = DARK_RED;
const BODY_BACKGROUND = LIGHT_GREY;

const theme = {
	text: PRIMARY_COLOR,
	bg: BODY_BACKGROUND,
	fg: QUATERNARY_COLOR,
	required: VALIDATION_ERROR,
	badge: {
		coin: {
			bg: TERTIARY_COLOR,
			color: WHITE,
		},
	},
	button: {
		submit: {
			bg: TERTIARY_COLOR,
			color: WHITE,
		},
	},
	form: {
		bg: WHITE,
		input: {
			border: LILAC_GREY,
			borderActive: QUATERNARY_COLOR,
			borderFocus: QUATERNARY_COLOR,
			color: PRIMARY_COLOR,
			labelColor: TERTIARY_COLOR,
		},
	},
};

export default theme;
