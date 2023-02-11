import styles from "./sectionThree.module.scss";
import {Col, Row} from "antd";

interface ISectionThreeProps {
    image: string;
    mainText: string;
}

export default function SectionThree({...props}: ISectionThreeProps) {
    return (
        <Row>
            <Col span={24}>
                <img className={styles.backgroundImage} src={props.image} />
                <p className={styles.overlayText}>{props.mainText}</p>
            </Col>
        </Row>
    )
}