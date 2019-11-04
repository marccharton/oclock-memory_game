import * as $ from 'jquery';

export {
    openModal,
    bindModalButton
};

function openModal(message, title = "modal", buttonText = "ok") {
    var modal = $('#modal-container');

    // on définit le contenu de la modal avec le texte construit
    modal.find('.modal-header h5').text(title);
    modal.find('.modal-body p').html(message);
    modal.find('.modal-footer button').html(buttonText);

    // on affiche la modal
    $('#modal-container').modal('show');
}

function bindModalButton(callback) {
    let modalButton = $('#modal-action-button');
    modalButton.click(function (e) {
        $('#modal-container').modal('hide');
        modalButton.unbind();
        setTimeout(() => {
            callback();
        }, 100);
    });
}
