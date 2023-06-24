import styles from './language.module.scss';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation'
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLanguage } from '@fortawesome/free-solid-svg-icons';

const languages = ['es', 'en'];

function DropdownLanguage({isExpanded, setIsExpanded, setLanguageSelected, router}) {

    const pathName = usePathname();

    const onClickLanguage = (language) => {
        setIsExpanded(false); 
        setLanguageSelected(language);
        router.push(pathName, pathName, {locale: language});
    };

    if (isExpanded) {
        return (
            <>
                <div className={[styles.option, 'w-100'].join(' ')}>
                    {
                        languages.map((language, index) => {
                            const classes = ['text', 'm-0', 'text-center', styles.pLanguage];
                            if (index === (languages.length - 1)) {
                                classes.push(styles.radiusBottom);
                            } else {
                                classes.push('border-bottom');
                            }
                            if (index === 0) {
                                classes.push(styles.radiusTop);
                            }
                            const classesName = classes.join(' ');
                            return <p   
                                        key={language} 
                                        className={classesName} 
                                        onClick={() => onClickLanguage(language)}
                                    >
                                        {language}
                                    </p>
                        })
                    }
                </div>
            </>
        );
    }
    return null;
}

function StaticLanguage({isExpanded, setIsExpanded, languageSelected}) {
    if (!isExpanded) {
        return (
            <>
                <p className={[styles.option, styles.pLanguage, 'm-0', 'py-1', 'text-center', 'w-100'].join(' ')} onClick={() => setIsExpanded(true)}>
                    <FontAwesomeIcon icon={faLanguage} className={[styles.iconLanguage, 'mx-2'].join(' ')}></FontAwesomeIcon>
                    <span className="text">{languageSelected}</span>
                </p>
            </>
        );
    }
    return null;
    
}

export default function Language() {
    const router = useRouter();
    const { locale } = router;
    const [isExpanded, setIsExpanded] = useState(false);
    const [languageSelected, setLanguageSelected] = useState(locale);
    return (
        <>
            <div className={[styles.languageSelectorContainer, 'pointer'].join(' ')}>
                <StaticLanguage isExpanded={isExpanded} setIsExpanded={setIsExpanded} languageSelected={languageSelected}></StaticLanguage>
                <DropdownLanguage isExpanded={isExpanded} setIsExpanded={setIsExpanded} setLanguageSelected={setLanguageSelected} router={router}></DropdownLanguage>
            </div>
        </>
    )
}