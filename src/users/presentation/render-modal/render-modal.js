import modalHTML from "./render-modal.html?raw";
import "./render-modal.css";

let modal;
let form;

export const showModal = () => {
    modal?.classList.remove("hide-modal");
};

export const hideModal = () => {
    modal?.classList.add("hide-modal");
    form?.reset();
};

export const renderModal = (element, saveUserCallback) => {
    if (modal) return;

    modal = document.createElement("div");
    modal.innerHTML = modalHTML;
    modal.classList.add("modal-container", "hide-modal");
    form = modal.querySelector("form");

    modal.addEventListener("click", (event) => {
        if (event.target.className !== "modal-container") return;
        hideModal();
    });

    //!------------------------------------------------------
    form.addEventListener("submit", async(event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const userLike = {};
        console.log(formData);
        for (const [key, value] of formData) {
            if (key === "balance") {
                userLike[key] = Number(value);
                continue;
            }

            if (key === "isActive") {
                userLike[key] = value === "on" ? true : false;
                continue;
            }
            userLike[key] = value;
        }
        
        await saveUserCallback(userLike)

        hideModal();
    });

    element.append(modal);
};
