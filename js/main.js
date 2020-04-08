const $ = x => document.getElementById(x);
const $dialogue = $("dialogue");
const $togglePowerMenu = $("toggle_power_menu");
const $powerMenu = $("power_menu");
const $toggleTaskView = $("toggle_task_view");
const $taskView = $("task_view");
const $$taskViewTasks = Array.from($taskView.getElementsByClassName("task_view__task"))
const $taskViewContext = $("task_view_context");
const $shutdown = $("shutdown");
const $toggleBrightness = $("toggle_brightness");
const $theme = $("theme");
const $$files = Array.from($("file_grid").getElementsByClassName("file_grid__item"));
const $wifiList = $("wifi_list");
const $toggleWifiList = $("toggle_wifi_list");
const $bluetoothList = $("bluetooth_list");
const $toggleBluetoothList = $("toggle_bluetooth_list");
const $volume = $("volume");
const $toggleVolume = $("toggle_volume");
const $calendar = $("calendar");
const $toggleCalendar = $("toggle_calendar");
const $search = $("search");
const $toggleSearch = $("toggle_search");
const $notifications = $("notifications");
const $toggleNotifications = $("toggle_notifications");

let powerMenuActive = false;
let taskViewActive = false;
let dialogueActive = false;
let wifiListActive = false;
let bluetoothListActive = false;
let volumeActive = false;
let calendarActive = false;
let searchActive = false;
let notificationsActive = false;
let darkMode = true;

$togglePowerMenu.onclick = () => {
    window.addEventListener("click", closePowerMenu);
};

function closePowerMenu() {
    if (powerMenuActive) {
        powerMenuActive = false;
        $powerMenu.classList.remove("active");
        window.removeEventListener("click", closePowerMenu);
    } else {
        powerMenuActive = true;
        $powerMenu.classList.add("active");
    }
}

$toggleTaskView.onclick = () => {
    window.addEventListener("click", closeTaskView);
};

function closeTaskView() {
    if (taskViewActive) {
        taskViewActive = false;
        $taskView.classList.remove("active");
        $taskViewContext.classList.remove("active");
        window.removeEventListener("click", closeTaskView);
    } else {
        taskViewActive = true;
        $taskView.classList.add("active");
    }
}

$$taskViewTasks.forEach(element => {
    element.oncontextmenu = (e) => {
        e.preventDefault();
        $taskViewContext.classList.add("active");
        $taskViewContext.style.top = `${e.clientY}px`;
        $taskViewContext.style.left = `${e.clientX}px`;
    };
});

$shutdown.onclick = () => {
    window.addEventListener("click", closeDialogue);
};

function closeDialogue() {
    if (dialogueActive) {
        dialogueActive = false;
        $dialogue.classList.remove("active");
        window.removeEventListener("click", closeDialogue);
    } else {
        dialogueActive = true;
        $dialogue.classList.add("active");
    }
}

$toggleBrightness.onclick = () => {
    const $i = $toggleBrightness.childNodes[1];
    if (darkMode) {
        darkMode = false;
        $i.innerText = "wb_sunny";
        $theme.href = "./css/themes/light.css"
        document.body.classList.add("light");
    } else {
        darkMode = true;
        $i.innerText = "brightness_2";
        $theme.href = "";
        document.body.classList.remove("light");
    }
};

let fileDragging = false;
let fileClone;
let fileGrabbed;

$$files.forEach(element => {
    element.onmousedown = e => {
        console.log("grabbed file");
        element.classList.add("grabbed");
        fileGrabbed = element;
        window.addEventListener("mousemove", fileDrag);
        window.addEventListener("mouseup", fileRelease);
        fileClone = element.cloneNode(true);
        fileClone.classList.add("clone");
        fileClone.style.top = 0;
        fileClone.style.left = 0;
        fileClone.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
        document.body.appendChild(fileClone);
    };
});

function fileDrag(e) {
    console.log("dragging file");
    fileClone.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
}

function fileRelease() {
    window.removeEventListener("mousemove", fileDrag);
    window.removeEventListener("mouseup", fileRelease);
    document.body.removeChild(fileClone);
    console.log("released file");
    console.log(fileGrabbed);
    fileGrabbed.classList.remove("grabbed");
}

const $$workspaces = Array.from(document.getElementsByClassName("workspace"));

$$workspaces.forEach(element => {
    element.onclick = () => {
        $$workspaces.forEach(elementj => {
            elementj.classList.add("inactive");
            element.classList.remove("inactive");
        });
    }
});

$toggleWifiList.onclick = () => {
    window.addEventListener("click", closeWifiList);
};

function closeWifiList() {
    if (wifiListActive) {
        wifiListActive = false;
        $wifiList.classList.remove("active");
        window.removeEventListener("click", closeWifiList);
    } else {
        wifiListActive = true;
        $wifiList.classList.add("active");
    }
}

$toggleBluetoothList.onclick = () => {
    window.addEventListener("click", closeBluetoothList);
};

function closeBluetoothList() {
    if (bluetoothListActive) {
        bluetoothListActive = false;
        $bluetoothList.classList.remove("active");
        window.removeEventListener("click", closeBluetoothList);
    } else {
        bluetoothListActive = true;
        $bluetoothList.classList.add("active");
    }
}




$toggleVolume.onclick = () => {
    window.addEventListener("click", closeVolume);
};

function closeVolume() {
    if (volumeActive) {
        volumeActive = false;
        $volume.classList.remove("active");
        window.removeEventListener("click", closeVolume);
    } else {
        volumeActive = true;
        $volume.classList.add("active");
    }
}



$toggleCalendar.onclick = () => {
    window.addEventListener("click", closeCalendar);
};

function closeCalendar() {
    if (calendarActive) {
        calendarActive = false;
        $calendar.classList.remove("active");
        window.removeEventListener("click", closeCalendar);
    } else {
        calendarActive = true;
        $calendar.classList.add("active");
    }
}



$toggleSearch.onclick = () => {
    window.addEventListener("click", closeSearch);
};

function closeSearch(e) {
    if (searchActive && !e.target.closest("#search")) {
        searchActive = false;
        $search.classList.remove("active");
        window.removeEventListener("click", closeSearch);
    } else {
        searchActive = true;
        $search.classList.add("active");
    }
}



$toggleNotifications.onclick = () => {
    window.addEventListener("click", closeNotifications);
};

function closeNotifications(e) {
    if (notificationsActive && !e.target.closest("#notifications")) {
        notificationsActive = false;
        $notifications.classList.remove("active");
        window.removeEventListener("click", closeNotifications);
    } else {
        notificationsActive = true;
        $notifications.classList.add("active");
    }
}

let notifsClosed = 0;
const $$notificationCloseBtns = Array.from($notifications.getElementsByClassName("notification__close"));

$$notificationCloseBtns.forEach(element => {
    element.onclick = () => {
        const $notif = element.closest(".task_view__task");
        $notif.classList.add("close");
        notifsClosed++;
        setTimeout(() => {
            $notif.classList.add("gone");
            if (notifsClosed === 4) {
                Array.from(document.getElementsByClassName("notifications__header")).forEach(element => {
                    element.classList.add("gone");
                });
                $("no_notifications").classList.add("active");
            }
        }, 200);
    };
});