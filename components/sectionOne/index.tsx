import styles from "./sectionOne.module.scss";
import {Button, Col, Modal, Row} from "antd";
import {useState} from "react";

interface ISectionOneProps {
    image: string;
    mainText: string;
    subText: string;
    style?: any;
    withDownloadButton?: boolean;
}

export default function SectionOne({...props}: ISectionOneProps) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Row style={props.style} className={styles.bannerContainer}>
            <Col span={12}>
                <img className={styles.bannerImg} src={props.image} />
            </Col>
            <Col span={8} className={styles.bannerSectionA}>
                <p className={styles.bannerMainText}>
                    {props.mainText}
                </p>
                <p className={styles.bannerSubText}>
                    {props.subText}
                </p>
                {
                    props.withDownloadButton ?
                        <div className={styles.buttonContainer}>
                            <Button className={styles.downloadButton}
                                    onClick={() => setModalVisible(!modalVisible)}>
                                Download Whitepaper
                            </Button>
                        </div>
                        : null
                }
            </Col>
            <Modal className={styles.modal} title={"Download Whitepaper"}
                   onCancel={() => setModalVisible(!modalVisible)}
                   open={modalVisible} footer={null}>
                <iframe src={"https://form.jotform.com/230416751370349"}/>
            </Modal>
        </Row>
    )
}