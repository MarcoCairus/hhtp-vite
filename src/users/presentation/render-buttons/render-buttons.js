import usersStore from "../../store/users-store";
import { renderTable } from "../render-table/render-table";
import "./render-button.css";

export const renderButtons = (element) => {

    const nextButton = document.createElement('button');
    nextButton.innerText = 'Next >'

    const prevButton = document.createElement('button');
    prevButton.innerText ='/<Prev'

    const currentPageLabel = document.createElement('span')
    currentPageLabel.id = 'current-page'
    currentPageLabel.innerText = usersStore.getCurrentPages()

    element.append(prevButton, currentPageLabel, nextButton)

    nextButton.addEventListener('click', async() => {
        await usersStore.loadNextPage();
        currentPageLabel.innerText = usersStore.getCurrentPages();
        renderTable(element);
    })

    prevButton.addEventListener('click', async() => {
        await usersStore.loadPreviousPage();
        currentPageLabel.innerText = usersStore.getCurrentPages();
        renderTable(element);
    })
}