export default function Modal() {

    const cancelButton = document.querySelector('.button.cancel')
    const modaWrapper = document.querySelector('.modal-wrapper')
    cancelButton.addEventListener('click', close)
}