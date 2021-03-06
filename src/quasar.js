import Vue from 'vue';

import ru from 'quasar/lang/ru';
import './styles/quasar.scss';
import iconSet from 'quasar/icon-set/fontawesome-v5.js';
import '@quasar/extras/fontawesome-v5/fontawesome-v5.css';
import {
	Quasar,
	QLayout,
	QDrawer,
	QPageContainer,
	QPage,
	QScrollArea,
	QBtn,
	QIcon,
	QList,
	QItem,
	QItemSection,
	QCard,
	QCardSection,
	QSelect,
	QCardActions,
	QInput,
	QTooltip,
	QFab,
	QFabAction,
	QSlideTransition,
	TouchPan,
	Ripple
} from 'quasar';

ru.isoName = 'ru-RU';

Vue.use(Quasar, {
	config: {},
	components: {
		QLayout,
		QDrawer,
		QPageContainer,
		QPage,
		QScrollArea,
		QBtn,
		QIcon,
		QList,
		QItem,
		QItemSection,
		QCard,
		QCardSection,
		QSelect,
		QCardActions,
		QInput,
		QFab,
		QFabAction,
		QSlideTransition,
		QTooltip
	},
	directives: {
		Ripple,
		TouchPan
	},
	plugins: {},
	iconSet: iconSet,
	lang: ru
});
