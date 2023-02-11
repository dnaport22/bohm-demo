import styles from "./sectionTwo.module.scss";
import {Col, Row} from "antd";

interface ISectionOneProps {
    image: string;
    mainText: string;
    subText: string;
    style?: any;
}


export default function SectionTwo({...props}: ISectionOneProps) {
    return (
        <Row style={props.style} className={styles.bannerContainer}>
            <Col span={8} className={styles.bannerSectionA}>
                <p className={styles.bannerMainText}>
                    {props.mainText}
                </p>
                <p className={styles.bannerSubText}>
                    {props.subText}
                </p>
            </Col>
            <Col span={12}>
                <img className={styles.bannerImg} src={props.image} />
            </Col>
        </Row>
    )
}