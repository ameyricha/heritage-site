function CalendarApp(date) {
	if (!(date instanceof Date)) {
		date = new Date();
	}

	this.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
	this.months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
	this.quotes = [
	"India is home to one of the world's oldest civilizations, with evidence of human settlement dating back to at least 2500 BCE in the Indus Valley.",

"The concept of 'Ahimsa' or non-violence, popularized by Mahatma Gandhi, has deep roots in Indian philosophy, particularly in Jainism and Buddhism.",

"The Vedas, ancient sacred texts written in Sanskrit, are among the oldest religious scriptures in the world and form the foundation of Hinduism.",

"Yoga, originating in ancient India, is a holistic practice that combines physical postures, breath control, and meditation for overall well-being.",

"Indian classical dance forms, such as Bharatanatyam, Kathak, Odissi, Kuchipudi, and Manipuri, have a rich history and are known for their intricate movements and expressions.",

"The Taj Mahal, a UNESCO World Heritage Site, is a symbol of eternal love and a masterpiece of Mughal architecture, built by Emperor Shah Jahan in memory of his wife Mumtaz Mahal.",

"India is known for its diverse cuisine, featuring a wide range of flavors and spices. Each region has its own distinct culinary traditions.",

"The Indian film industry, commonly known as Bollywood, produces the largest number of films in the world, and Indian cinema has a global fan following.",

"The Indus Valley Civilization, one of the world's earliest urban cultures, had advanced city planning, drainage systems, and a system of standardized weights and measures.",

"Ayurveda, the ancient Indian system of medicine, focuses on achieving balance in the body through natural remedies, herbal treatments, and a healthy lifestyle.",

"India is a land of festivals, with celebrations such as Diwali, Holi, Eid, Navratri, and Durga Puja reflecting the country's cultural diversity and religious tolerance.",

"The Rigveda, one of the four Vedas, contains hymns that are among the oldest known religious texts, exploring themes of creation, rituals, and cosmic order.",

"Indian classical music, with traditions like Hindustani and Carnatic, relies on intricate ragas and talas, creating a profound and emotional experience for listeners.",

"The ancient city of Varanasi, situated on the banks of the Ganges, is one of the oldest continuously inhabited cities in the world and a sacred pilgrimage site for Hindus.",

"The art of Mehndi, or henna tattooing, is an ancient tradition in India, often used for special occasions like weddings and festivals.",

"The concept of 'Vasudhaiva Kutumbakam,' meaning 'the world is one family,' is deeply rooted in Indian philosophy, emphasizing universal brotherhood and unity.",

"The Indian epic, Mahabharata, is one of the longest epic poems in the world, containing the Bhagavad Gita, a sacred dialogue on duty and righteousness.",

"Khadi, a handspun and handwoven fabric, became a symbol of India's independence movement under Mahatma Gandhi, promoting self-sufficiency and traditional craftsmanship.",

"The stepwell architecture of Gujarat, exemplified by structures like the Rani ki Vav, showcases the intricate design and engineering skills of ancient Indian civilizations.",

"Indian classical literature includes timeless works such as the Ramayana and the Mahabharata, along with the writings of Rabindranath Tagore, Kalidasa, and other literary giants.",

"The traditional Indian art of rangoli involves creating colorful patterns on the ground using materials like colored rice, flower petals, or powder, especially during festivals.",

"The Qutub Minar in Delhi, a UNESCO World Heritage Site, is the tallest brick minaret in the world, reflecting the architectural brilliance of the Delhi Sultanate.",

"The practice of meditation and mindfulness, as seen in Vipassana and other meditation techniques, has ancient roots in Indian spiritual traditions.",

"India's diverse geography and climate have given rise to a wide range of traditional crafts, including silk weaving, pottery, carpet making, and block printing.",

"The concept of 'Atithi Devo Bhava,' meaning 'the guest is God,' emphasizes the importance of hospitality in Indian culture, reflecting a deep-seated respect for guests and visitors.",
	];
	this.apts = [
		{
			name: "Finish this web app",
			endTime: new Date(2016, 4, 30, 23),
			startTime: new Date(2016, 4, 30, 21),
			day: new Date(2016, 4, 30).toString(),
		},
		{
			name: "My Birthday!",
			endTime: new Date(2016, 4, 1, 23, 59),
			startTime: new Date(2016, 4, 1, 0),
			day: new Date(2016, 4, 1).toString(),
		},
	];

	this.aptDates = [new Date(2016, 4, 30).toString(), new Date(2016, 4, 1).toString()];
	this.eles = {};
	this.calDaySelected = null;

	this.calendar = document.getElementById("calendar-app");

	this.calendarView = document.getElementById("dates");

	this.calendarMonthDiv = document.getElementById("calendar-month");
	this.calendarMonthLastDiv = document.getElementById("calendar-month-last");
	this.calendarMonthNextDiv = document.getElementById("calendar-month-next");

	this.dayInspirationalQuote = document.getElementById("inspirational-quote");

	this.todayIsSpan = document.getElementById("footer-date");
	// this.eventsCountSpan = document.getElementById("footer-events");
	this.dayViewEle = document.getElementById("day-view");
	this.dayViewExitEle = document.getElementById("day-view-exit");
	this.dayViewDateEle = document.getElementById("day-view-date");
	this.addDayEventEle = document.getElementById("add-event");
	this.dayEventsEle = document.getElementById("day-events");

	this.dayEventAddForm = {
		cancelBtn: document.getElementById("add-event-cancel"),
		addBtn: document.getElementById("add-event-save"),
		nameEvent: document.getElementById("input-add-event-name"),
		startTime: document.getElementById("input-add-event-start-time"),
		endTime: document.getElementById("input-add-event-end-time"),
		startAMPM: document.getElementById("input-add-event-start-ampm"),
		endAMPM: document.getElementById("input-add-event-end-ampm"),
	};
	this.dayEventsList = document.getElementById("day-events-list");
	this.dayEventBoxEle = document.getElementById("add-day-event-box");

	/* Start the app */
	this.showView(date);
	this.addEventListeners();
	this.todayIsSpan.textContent = "Today is " + this.months[date.getMonth()] + " " + date.getDate();
}

CalendarApp.prototype.addEventListeners = function () {
	this.calendar.addEventListener("click", this.mainCalendarClickClose.bind(this));
	this.todayIsSpan.addEventListener("click", this.showView.bind(this));
	this.calendarMonthLastDiv.addEventListener("click", this.showNewMonth.bind(this));
	this.calendarMonthNextDiv.addEventListener("click", this.showNewMonth.bind(this));
	this.dayViewExitEle.addEventListener("click", this.closeDayWindow.bind(this));
	this.dayViewDateEle.addEventListener("click", this.showNewMonth.bind(this));
	this.addDayEventEle.addEventListener("click", this.addNewEventBox.bind(this));
	this.dayEventAddForm.cancelBtn.addEventListener("click", this.closeNewEventBox.bind(this));
	this.dayEventAddForm.cancelBtn.addEventListener("keyup", this.closeNewEventBox.bind(this));

	this.dayEventAddForm.startTime.addEventListener("keyup", this.inputChangeLimiter.bind(this));
	this.dayEventAddForm.startAMPM.addEventListener("keyup", this.inputChangeLimiter.bind(this));
	this.dayEventAddForm.endTime.addEventListener("keyup", this.inputChangeLimiter.bind(this));
	this.dayEventAddForm.endAMPM.addEventListener("keyup", this.inputChangeLimiter.bind(this));
	this.dayEventAddForm.addBtn.addEventListener("click", this.saveAddNewEvent.bind(this));
};
CalendarApp.prototype.showView = function (date) {
	if (!date || !(date instanceof Date)) date = new Date();
	var now = new Date(date),
		y = now.getFullYear(),
		m = now.getMonth();
	var today = new Date();

	var lastDayOfM = new Date(y, m + 1, 0).getDate();
	var startingD = new Date(y, m, 1).getDay();
	var lastM = new Date(y, now.getMonth() - 1, 1);
	var nextM = new Date(y, now.getMonth() + 1, 1);

	this.calendarMonthDiv.classList.remove("cview__month-activate");
	this.calendarMonthDiv.classList.add("cview__month-reset");

	while (this.calendarView.firstChild) {
		this.calendarView.removeChild(this.calendarView.firstChild);
	}

	// build up spacers
	for (var x = 0; x < startingD; x++) {
		var spacer = document.createElement("div");
		spacer.className = "cview--spacer";
		this.calendarView.appendChild(spacer);
	}

	for (var z = 1; z <= lastDayOfM; z++) {
		var _date = new Date(y, m, z);
		var day = document.createElement("div");
		day.className = "cview--date";
		day.textContent = z;
		day.setAttribute("data-date", _date);
		day.onclick = this.showDay.bind(this);

		// check if todays date
		if (z == today.getDate() && y == today.getFullYear() && m == today.getMonth()) {
			day.classList.add("today");
		}

		// check if has events to show
		if (this.aptDates.indexOf(_date.toString()) !== -1) {
			day.classList.add("has-events");
		}

		this.calendarView.appendChild(day);
	}

	var _that = this;
	setTimeout(function () {
		_that.calendarMonthDiv.classList.add("cview__month-activate");
	}, 50);

	this.calendarMonthDiv.textContent = this.months[now.getMonth()] + " " + now.getFullYear();
	this.calendarMonthDiv.setAttribute("data-date", now);

	this.calendarMonthLastDiv.textContent = "← " + this.months[lastM.getMonth()];
	this.calendarMonthLastDiv.setAttribute("data-date", lastM);

	this.calendarMonthNextDiv.textContent = this.months[nextM.getMonth()] + " →";
	this.calendarMonthNextDiv.setAttribute("data-date", nextM);
};
CalendarApp.prototype.showDay = function (e, dayEle) {
	e.stopPropagation();
	if (!dayEle) {
		dayEle = e.currentTarget;
	}
	var dayDate = new Date(dayEle.getAttribute("data-date"));

	this.calDaySelected = dayEle;

	this.openDayWindow(dayDate);
};
CalendarApp.prototype.openDayWindow = function (date) {
	var now = new Date();
	var day = new Date(date);
	this.dayViewDateEle.textContent =
		this.days[day.getDay()] + ", " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
	this.dayViewDateEle.setAttribute("data-date", day);
	this.dayViewEle.classList.add("calendar--day-view-active");

	/* Contextual lang changes based on tense. Also show btn for scheduling future events */
	var _dayTopbarText = "";
	if (day < new Date(now.getFullYear(), now.getMonth(), now.getDate())) {
		_dayTopbarText = "had ";
		this.addDayEventEle.style.display = "none";
	} else {
		_dayTopbarText = "have ";
		this.addDayEventEle.style.display = "inline";
	}
	this.addDayEventEle.setAttribute("data-date", day);

	var eventsToday = this.showEventsByDay(day);
	if (!eventsToday) {
		_dayTopbarText += "no ";
		var _rand = Math.round(Math.random() * (this.quotes.length - 1 - 0) + 0);
		this.dayInspirationalQuote.textContent = this.quotes[_rand];
	} else {
		_dayTopbarText += eventsToday.length + " ";
		this.dayInspirationalQuote.textContent = null;
	}
	//this.dayEventsList.innerHTML = this.showEventsCreateHTMLView(eventsToday);
	while (this.dayEventsList.firstChild) {
		this.dayEventsList.removeChild(this.dayEventsList.firstChild);
	}

	this.dayEventsList.appendChild(this.showEventsCreateElesView(eventsToday));

	this.dayEventsEle.textContent =
		_dayTopbarText + "events on " + this.months[day.getMonth()] + " " + day.getDate() + ", " + day.getFullYear();
};

CalendarApp.prototype.showEventsCreateElesView = function (events) {
	var ul = document.createElement("ul");
	ul.className = "day-event-list-ul";
	events = this.sortEventsByTime(events);
	var _this = this;
	events.forEach(function (event) {
		var _start = new Date(event.startTime);
		var _end = new Date(event.endTime);
		var idx = event.index;
		var li = document.createElement("li");
		li.className = "event-dates";
		// li.innerHtml
		var html =
			"<span class='start-time'>" +
			_start.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }) +
			"</span> <large>TO</large> ";
		html +=
			"<span class='end-time'>" +
			_end.toLocaleTimeString(navigator.language, { hour: "2-digit", minute: "2-digit" }) +
			(_end.getDate() != _start.getDate() ? " <small>on " + _end.toLocaleDateString() + "</small>" : "") +
			"</span>";

		html += "<span class='event-name'>" + event.name + "</span>";

		var div = document.createElement("div");
		div.className = "event-dates";
		div.innerHTML = html;

		var deleteBtn = document.createElement("span");
		var deleteText = document.createTextNode("delete");
		deleteBtn.className = "event-delete";
		deleteBtn.setAttribute("data-idx", idx);
		deleteBtn.appendChild(deleteText);
		deleteBtn.onclick = _this.deleteEvent.bind(_this);

		div.appendChild(deleteBtn);

		li.appendChild(div);
		ul.appendChild(li);
	});
	return ul;
};
CalendarApp.prototype.deleteEvent = function (e) {
	var deleted = this.apts.splice(e.currentTarget.getAttribute("data-idx"), 1);
	var deletedDate = new Date(deleted[0].day);
	var anyDatesLeft = this.showEventsByDay(deletedDate);
	if (anyDatesLeft === false) {
		// safe to remove from array
		var idx = this.aptDates.indexOf(deletedDate.toString());
		if (idx >= 0) {
			this.aptDates.splice(idx, 1);
			// remove dot from calendar view
			var ele = document.querySelector('.cview--date[data-date="' + deletedDate.toString() + '"]');
			if (ele) {
				ele.classList.remove("has-events");
			}
		}
	}
	this.openDayWindow(deletedDate);
};
CalendarApp.prototype.sortEventsByTime = function (events) {
	if (!events) return [];
	return events.sort(function compare(a, b) {
		if (new Date(a.startTime) < new Date(b.startTime)) {
			return -1;
		}
		if (new Date(a.startTime) > new Date(b.startTime)) {
			return 1;
		}
		// a must be equal to b
		return 0;
	});
};
CalendarApp.prototype.showEventsByDay = function (day) {
	var _events = [];
	this.apts.forEach(function (apt, idx) {
		if (day.toString() == apt.day.toString()) {
			apt.index = idx;
			_events.push(apt);
		}
	});
	return _events.length ? _events : false;
};
CalendarApp.prototype.closeDayWindow = function () {
	this.dayViewEle.classList.remove("calendar--day-view-active");
	this.closeNewEventBox();
};
CalendarApp.prototype.mainCalendarClickClose = function (e) {
	if (e.currentTarget != e.target) {
		return;
	}

	this.dayViewEle.classList.remove("calendar--day-view-active");
	this.closeNewEventBox();
};
CalendarApp.prototype.addNewEventBox = function (e) {
	var target = e.currentTarget;
	this.dayEventBoxEle.setAttribute("data-active", "true");
	this.dayEventBoxEle.setAttribute("data-date", target.getAttribute("data-date"));
};
CalendarApp.prototype.closeNewEventBox = function (e) {
	if (e && e.keyCode && e.keyCode != 13) return false;

	this.dayEventBoxEle.setAttribute("data-active", "false");
	// reset values
	this.resetAddEventBox();
};
CalendarApp.prototype.saveAddNewEvent = function () {
	var saveErrors = this.validateAddEventInput();
	if (!saveErrors) {
		this.addEvent();
	}
};

CalendarApp.prototype.addEvent = function () {
	var name = this.dayEventAddForm.nameEvent.value.trim();
	var dayOfDate = this.dayEventBoxEle.getAttribute("data-date");
	var dateObjectDay = new Date(dayOfDate);
	var cleanDates = this.cleanEventTimeStampDates();

	this.apts.push({
		name: name,
		day: dateObjectDay,
		startTime: cleanDates[0],
		endTime: cleanDates[1],
	});
	this.closeNewEventBox();
	this.openDayWindow(dayOfDate);
	this.calDaySelected.classList.add("has-events");
	// add to dates
	if (this.aptDates.indexOf(dateObjectDay.toString()) === -1) {
		this.aptDates.push(dateObjectDay.toString());
	}
};
CalendarApp.prototype.convertTo23HourTime = function (stringOfTime, AMPM) {
	// convert to 0 - 23 hour time
	var mins = stringOfTime.split(":");
	var hours = stringOfTime.trim();
	if (mins[1] && mins[1].trim()) {
		hours = parseInt(mins[0].trim());
		mins = parseInt(mins[1].trim());
	} else {
		hours = parseInt(hours);
		mins = 0;
	}
	hours = AMPM == "am" ? (hours == 12 ? 0 : hours) : hours <= 11 ? parseInt(hours) + 12 : hours;
	return [hours, mins];
};
CalendarApp.prototype.cleanEventTimeStampDates = function () {
	var startTime =
		this.dayEventAddForm.startTime.value.trim() ||
		this.dayEventAddForm.startTime.getAttribute("placeholder") ||
		"8";
	var startAMPM =
		this.dayEventAddForm.startAMPM.value.trim() ||
		this.dayEventAddForm.startAMPM.getAttribute("placeholder") ||
		"am";
	startAMPM = startAMPM == "a" ? startAMPM + "m" : startAMPM;
	var endTime =
		this.dayEventAddForm.endTime.value.trim() || this.dayEventAddForm.endTime.getAttribute("placeholder") || "9";
	var endAMPM =
		this.dayEventAddForm.endAMPM.value.trim() || this.dayEventAddForm.endAMPM.getAttribute("placeholder") || "pm";
	endAMPM = endAMPM == "p" ? endAMPM + "m" : endAMPM;
	var date = this.dayEventBoxEle.getAttribute("data-date");

	var startingTimeStamps = this.convertTo23HourTime(startTime, startAMPM);
	var endingTimeStamps = this.convertTo23HourTime(endTime, endAMPM);

	var dateOfEvent = new Date(date);
	var startDate = new Date(
		dateOfEvent.getFullYear(),
		dateOfEvent.getMonth(),
		dateOfEvent.getDate(),
		startingTimeStamps[0],
		startingTimeStamps[1]
	);
	var endDate = new Date(
		dateOfEvent.getFullYear(),
		dateOfEvent.getMonth(),
		dateOfEvent.getDate(),
		endingTimeStamps[0],
		endingTimeStamps[1]
	);

	// if end date is less than start date - set end date back another day
	if (startDate > endDate) endDate.setDate(endDate.getDate() + 1);

	return [startDate, endDate];
};
CalendarApp.prototype.validateAddEventInput = function () {
	var _errors = false;
	var name = this.dayEventAddForm.nameEvent.value.trim();
	var startTime = this.dayEventAddForm.startTime.value.trim();
	var startAMPM = this.dayEventAddForm.startAMPM.value.trim();
	var endTime = this.dayEventAddForm.endTime.value.trim();
	var endAMPM = this.dayEventAddForm.endAMPM.value.trim();

	if (!name || name == null) {
		_errors = true;
		this.dayEventAddForm.nameEvent.classList.add("add-event-edit--error");
		this.dayEventAddForm.nameEvent.focus();
	} else {
		this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
	}

	//   if (!startTime || startTime == null) {
	//     _errors = true;
	//     this.dayEventAddForm.startTime.classList.add("add-event-edit--error");
	//   } else {
	//      this.dayEventAddForm.startTime.classList.remove("add-event-edit--error");
	//   }

	return _errors;
};
var timeOut = null;
var activeEle = null;
CalendarApp.prototype.inputChangeLimiter = function (ele) {
	if (ele.currentTarget) {
		ele = ele.currentTarget;
	}
	if (timeOut && ele == activeEle) {
		clearTimeout(timeOut);
	}

	var limiter = CalendarApp.prototype.textOptionLimiter;

	var _options = ele.getAttribute("data-options").split(",");
	var _format = ele.getAttribute("data-format") || "text";
	timeOut = setTimeout(function () {
		ele.value = limiter(_options, ele.value, _format);
	}, 600);
	activeEle = ele;
};
CalendarApp.prototype.textOptionLimiter = function (options, input, format) {
	if (!input) return "";

	if (input.indexOf(":") !== -1 && format == "datetime") {
		var _splitTime = input.split(":", 2);
		if (_splitTime.length == 2 && !_splitTime[1].trim()) return input;
		var _trailingTime = parseInt(_splitTime[1]);
		/* Probably could be coded better -- a block to clean up trailing data */
		if (options.indexOf(_splitTime[0]) === -1) {
			return options[0];
		} else if (_splitTime[1] == "0") {
			return input;
		} else if (_splitTime[1] == "00") {
			return _splitTime[0] + ":00";
		} else if (_trailingTime < 10) {
			return _splitTime[0] + ":" + "0" + _trailingTime;
		} else if (!Number.isInteger(_trailingTime) || _trailingTime < 0 || _trailingTime > 59) {
			return _splitTime[0];
		}
		return _splitTime[0] + ":" + _trailingTime;
	}
	if (input.toString().length >= 3) {
		var pad = (input.toString().length - 4) * -1;
		var _hour, _min;
		if (pad == 1) {
			_hour = input[0];
			_min = input[1] + input[2];
		} else {
			_hour = input[0] + input[1];
			_min = input[2] + input[3];
		}

		_hour = Math.max(1, Math.min(12, _hour));
		_min = Math.min(59, _min);
		if (_min < 10) {
			_min = "0" + _min;
		}
		_min = isNaN(_min) ? "00" : _min;
		_hour = isNaN(_hour) ? "9" : _hour;

		return _hour + ":" + _min;
	}

	if (options.indexOf(input) === -1) {
		return options[0];
	}

	return input;
};
CalendarApp.prototype.resetAddEventBox = function () {
	this.dayEventAddForm.nameEvent.value = "";
	this.dayEventAddForm.nameEvent.classList.remove("add-event-edit--error");
	this.dayEventAddForm.endTime.value = "";
	this.dayEventAddForm.startTime.value = "";
	this.dayEventAddForm.endAMPM.value = "";
	this.dayEventAddForm.startAMPM.value = "";
};
CalendarApp.prototype.showNewMonth = function (e) {
	var date = e.currentTarget.dataset.date;
	var newMonthDate = new Date(date);
	this.showView(newMonthDate);
	this.closeDayWindow();
	return true;
};

var calendar = new CalendarApp();
console.log(calendar);

function swRegistration() {
	const heart = ["font-size: 20px", "padding: 12px", "margin: 4px 0 4px 4px", "color: rgba(238,58,136,1)"].join(";");
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker
			.register("/budapest-calendar/sw.js", {
				scope: "/budapest-calendar/",
			})
			.then(function (registration) {
				console.log("%c❤️", heart);
			})
			.catch(function (err) {
				console.log(err);
			});
	}
}

function consoleText() {
	console.clear();
	const styles = [
		"color: white",
		"background: rgba(238,58,136,1)",
		"font-size: 18px",
		"padding: 12px",
		"margin: 6px 0 6px 14px",
	].join(";");
	const styles2 = ["font-size: 14px", "padding: 16px", "margin: 6px 0 6px 0", "color: rgba(238,58,136,1)"].join(";");
	console.log("%cHello World! I'm Emmanuel.", styles);
	console.log("%cThank you for checking out my work!", styles2);
	const gradient = [
		"font-size: 14px",
		"color: #fff",
		"width: 200px",
		"padding: 8px",
		"margin: 6px 0 6px 14px",
		"border-radius: 4px",
		"background: rgba(238,58,136,1)",
		"background: linear-gradient( 109.6deg, rgba(238,58,136,1) 11.2%, rgba(128,162,245,1) 91.1% )",
	].join(";");
	console.log("%cPortfolio%chttps://bit.ly/3QQr1Ux", gradient, styles2);
	console.log("%cLinkedin %chttps://bit.ly/3cygAD4", gradient, styles2);
	console.log("%cGithub   %chttps://bit.ly/3iwQC6U", gradient, styles2);
	console.log("%cThe README   %chttps://bit.ly/3SbdJm0", gradient, styles2);
	console.log("%cHave a wonderful day!", styles2);
}

swRegistration();
consoleText();
