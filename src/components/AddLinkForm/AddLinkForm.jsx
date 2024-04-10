import "./AddLinkForm.css";
import LinkIcon from "../../assets/icon/link.png";

function AddLinkForm() {
    return (
        <div className="link-wrap">
            <form className="link-add-form">
                <div className="link-con-wrap">
                    <img src={LinkIcon} alt="" />
                    <input className="link-input" type="text" placeholder="링크를 추가해보세요." />
                    <button className="link-button">추가하기</button>
                </div>
            </form>
        </div>
    );
}

export default AddLinkForm;
