
import barbedStingray from '../../Photos/stingray.png';
// footer component

function Footer() {

    return (
        <div id="footer-div">
            <div id="witch-quote">
                <h4>A cackle in the night</h4>
                <h4>A black cat on the stair</h4>
                <h4>the Jackolamnters laugh</h4>
                <h4>you mortals, BEWARE</h4>
            </div>
            <div id="copy-right">
                <div id="copy-text">
                    <p><span id="footerText-style">Ben Rehmann</span></p>
                    <p><span id="footerText-style">Oct. 31st, 2023</span></p>
                </div>
                <div id="copy-image">
                    <img id="stingray-logo" alt="stingrayLogo" src={barbedStingray} />
                </div>
            </div>

        </div>
    )
}

export default Footer;