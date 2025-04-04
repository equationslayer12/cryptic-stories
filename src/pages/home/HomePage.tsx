import { Link } from 'react-router-dom';
import * as Dialog from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';
import { Cross2Icon, InfoCircledIcon } from '@radix-ui/react-icons';

import styles from './HomePage.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heroTitle}>Welcome to Our Awesome App</h1>
      <p className={styles.heroDescription}>
        Discover amazing stories and interactive content. Built with modern
        tools like Vite, React, Radix UI, and SCSS.
      </p>

      <div className={styles.ctaContainer}>
        <Link
          to='./story'
          className={`${styles.button} ${styles.buttonPrimary}`}
        >
          Read Our Story
        </Link>

        {/* Radix Dialog Trigger Button */}
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {/* Apply button styles */}
            <button className={`${styles.button} ${styles.buttonSecondary}`}>
              Learn More (Dialog)
            </button>
          </Dialog.Trigger>

          {/* Radix Dialog Content */}
          <Dialog.Portal>
            {/* Apply specific SCSS classes */}
            <Dialog.Overlay className={styles.dialogOverlay} />
            <Dialog.Content className={styles.dialogContent}>
              <Dialog.Title className={styles.dialogTitle}>
                About This Project
              </Dialog.Title>
              <Dialog.Description className={styles.dialogDescription}>
                This is a demonstration of integrating Radix UI components
                within a Vite + React application, styled using SCSS Modules.
                Radix provides accessible, unstyled primitives.
              </Dialog.Description>
              <div className={styles.dialogActions}>
                <Dialog.Close asChild>
                  <button
                    className={`${styles.button} ${styles.buttonTertiary}`}
                  >
                    Close
                  </button>
                </Dialog.Close>
              </div>
              <Dialog.Close asChild>
                <button
                  className={styles.iconButton} // Style for the close icon
                  aria-label='Close'
                >
                  <Cross2Icon />
                </button>
              </Dialog.Close>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>

      {/* Section with Tooltip Example */}
      <div className={styles.showcaseSection}>
        <h2 className={styles.showcaseTitle}>Radix UI Showcase</h2>
        <p className={styles.showcaseDescription}>
          We use Radix primitives for enhanced accessibility and interactivity.
          Hover over the icon for a tooltip example!
        </p>
        <Tooltip.Provider delayDuration={200}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              {/* Re-use icon button style */}
              <button
                className={`${styles.iconButton} ${styles.tooltipTrigger}`}
              >
                <InfoCircledIcon />
              </button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              {/* Apply tooltip styles */}
              <Tooltip.Content className={styles.tooltipContent} sideOffset={5}>
                This uses @radix-ui/react-tooltip!
                <Tooltip.Arrow className={styles.tooltipArrow} />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>
    </div>
  );
}

export default HomePage;
