import { toast } from "react-toastify";
import CustomToast from "../components/ui/CustomToast";

const notify = {
    success: (title, message) => toast(<CustomToast type="success" title={title} message={message} />),
    error: (title, message) => toast(<CustomToast type="error" title={title} message={message} />),
    info: (title, message) => toast(<CustomToast type="info" title={title} message={message} />),
    warning: (title, message) => toast(<CustomToast type="warning" title={title} message={message} />),
};

export default notify; 