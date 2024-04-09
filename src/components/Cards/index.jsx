import { useFetch } from "../../utils/hooks/useFetch";
import { formatDate, generateTimeText } from "../../utils/hooks/date";
import thumbnail from "../../assets/thumbnail.svg";
import styles from "./index.module.css";

function Cards(props) {
  const CardData = useFetch(props.url);

  return (
    <div className={styles.card_grid_container}>
      {CardData ? (
        CardData.folder.links.map((link) => (
          <a href={link.url}>
            <div key={link.id} className={styles.card}>
              <div className={styles.card_img_div}>
                {link.imageSource ? (
                  <img
                    src={link.imageSource}
                    className={styles.card_img}
                    alt={link.title}
                  />
                ) : (
                  <img
                    src={thumbnail}
                    className={styles.card_img}
                    alt="thumbnail_img"
                  />
                )}
              </div>
              <div className={styles.card_txt_div}>
                <div className={styles.card_txt_div_top}>
                  <p className={styles.left_time_p}>
                    {generateTimeText(link.createdAt)}
                  </p>
                </div>
                <div className={styles.card_txt_div_body}>
                  <p className={styles.card_txt_div_body}>{link.description}</p>
                </div>
                <div className={styles.card_txt_date}>
                  {formatDate(link.createdAt)}
                </div>
              </div>
            </div>
          </a>
        ))
      ) : (
        <div className={styles.noLinkText}>저장된 링크가 없습니다</div>
      )}
    </div>
  );
}

export default Cards;
