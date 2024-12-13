class Toggle {
    constructor(buttonSelector) {
        this.button = document.querySelector(buttonSelector);
        this.msgElements = document.querySelectorAll(".msg");
        this.sidebar = document.querySelector(".sideBar");
        this.main = document.querySelector(".main");
        this.box = document.querySelector(".box");
        this.sidebox = document.querySelector(".sidebox");
        this.lastButtons = document.querySelectorAll(".last-btn");
        this.atnElement = document.querySelector(".atn");
        this.hr = document.querySelectorAll("hr");
        this.blackbox = document.querySelector(".blackbox");
        this.sidebarimg = document.querySelector(".sidebar-img");

        this.initialize();
    }

    applyDarkMode() {
        document.body.style.backgroundColor = "#4B5945";
        document.body.style.color = "white";

        this.msgElements.forEach((element) => {
            element.style.color = "#4B5945";
        });

        this.sidebar.style.backgroundColor = "#91AC8F";
        this.main.style.backgroundColor = "#66785F";
        this.main.style.borderLeft = "0.5px solid #4B5945";
        this.box.style.backgroundColor = "#B2C9AD";
        this.sidebox.style.backgroundColor = "#B2C9AD";
        this.sidebox.style.border = "0.3px solid #4B5945"
        this.blackbox.style.backgroundColor = "#4B5945";
        this.hr.forEach((line)=>{
            line.style.backgroundColor = "#4B5945";
            line.style.height = "1px";
            line.style.border = "none";
        })
        this.lastButtons.forEach((button) => {
            button.style.color = "#4B5945";
        });

        if (this.atnElement) {
            this.atnElement.style.color = "#4B5945";
        }
        if(this.sidebarimg){
            this.sidebarimg.style.display = "none";
        }
    }

    removeDarkMode() {
        document.body.style.backgroundColor = "";
        document.body.style.color = "";

        this.msgElements.forEach((element) => {
            element.style.color = "";
        });

        this.sidebar.style.backgroundColor = "";
        this.main.style.backgroundColor = "";
        this.box.style.backgroundColor = "";
        this.sidebox.style.backgroundColor = "";
        this.main.style.borderLeft = "";
        this.sidebox.style.border = "";
        this.blackbox.style.backgroundColor = "";

        this.lastButtons.forEach((button) => {
            button.style.color = "";
        });

        this.hr.forEach((line)=>{
            line.style.backgroundColor = "";
            line.style.height = "";
            line.style.border = "";
        })

        if (this.atnElement) {
            this.atnElement.style.color = "";
        }
        if(this.sidebarimg){
            this.sidebarimg.style.display = "";
        }
    }

    initialize() {
        this.button.addEventListener("click", () => {
            if (this.button.innerText === "Dark Mode") {
                this.applyDarkMode();
                this.button.innerText = "Light Mode";
            } else {
                this.removeDarkMode();
                this.button.innerText = "Dark Mode";
            }
        });
    }
}

const toggle = new Toggle(".dark-mode");
