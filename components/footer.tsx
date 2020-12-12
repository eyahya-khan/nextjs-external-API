import styles from './footer.module.css';
import { CMS_USERNAME } from '../lib/constants';

export default function Footer() {
  return (
    <footer className={styles.txtfooter}>
      <>
        <h3>@2020 Copyright by {CMS_USERNAME}</h3>
      </>
    </footer>
  );
}
