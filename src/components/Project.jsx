function Project({ id, imgSrc, title, description, modalContent, isEven }) {
  return (
    <div>
      <div className={`project ${isEven ? 'even' : ''}`} onClick={() => openModal(id)}>
        <img src={imgSrc} alt={title} />
        <div className="text-container">
            <div className="project-title">{title}</div>
            <div className="project-description">{description}</div>
        </div>
      </div>
      <div id={id} className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal(id)}>
            &times;
          </span>
          <div className="modal-body">
            <div className="modal-description">{modalContent}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const openModal = (id) => {
  document.getElementById(id).style.display = "block";
};

const closeModal = (id) => {
  document.getElementById(id).style.display = "none";
};

window.onclick = function (event) {
    var modals = document.getElementsByClassName('modal');
    for (var i = 0; i < modals.length; i++) {
        if (event.target == modals[i]) {
            modals[i].style.display = "none";
        }
    }
}

export default Project;
