import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faSignOutAlt,
  faEdit,
  faSpinner,
  faCircleNotch,
  faPlusSquare,
  faMobile,
  faEnvelope,
  faGlobeAmericas
} from "@fortawesome/free-solid-svg-icons";

import { fab, faGithub } from "@fortawesome/free-brands-svg-icons";

const Icons = () => {
  return library.add(
    fab,
    faGithub,
    faTimes,
    faSignOutAlt,
    faEdit,
    faSpinner,
    faCircleNotch,
    faPlusSquare,
    faMobile,
    faEnvelope,
    faGlobeAmericas
  );
};

export default Icons;
