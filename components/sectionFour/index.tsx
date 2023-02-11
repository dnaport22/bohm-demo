import styles from "./sectionFour.module.scss";
import {Row} from "antd";
import SectionTwo from "@/components/sectionTwo";

interface ISectionFourProps {
    image: string;
    mainText: string;
}

export default function SectionFour({...props}: ISectionFourProps) {
    return (
        <Row className={styles.container}>
            <div className={styles.card}>
                <SectionTwo style={{height: "100%"}} image={props.image} mainText={props.mainText} subText={""}/>
            </div>
        </Row>
    )
}