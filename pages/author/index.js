import Head from 'next/head';
import Layout from '../../components/layout/layout';
import { useRouter } from 'next/router';
import en from '../../public/i18n/en';
import es from '../../public/i18n/es';
import styles from './author.module.scss';
import Image from 'next/image';
import JorgePhoto from "../../public/images/author.jpeg";

export default function Author() {

    const router = useRouter();
    const { locale } = router;
    const i18n = locale === 'es' ? es : en;

    const styling = {
        pHead: ['d-flex', 'm-0', styles.p].join(' '),
        spanHead: ['d-none', 'd-md-block', styles.span].join(' '),
        h4: ['p-3 text-center col-12', styles.sectionTitle, styles.h4].join(' '),
        aside1: ['d-none d-md-flex col-md-3 flex-column align-items-center justify-content-center p-3', styles.datesContainerTop].join(' '),
        p1: ['d-md-none', styles.p].join(' '),
        dates1: ['d-none d-md-flex col-md-3 flex-column align-items-center justify-content-center p-3', styles.datesContainerCenter].join(' '),
        dates2: ['d-none d-md-flex col-md-3 flex-column align-items-center justify-content-center p-3', styles.datesContainerBottom].join(' '),
        p2: ['m-0 bold', styles.p].join(' '),
        p3: ['m-0', styles.p].join(' '),
        p4: ['d-md-none m-0', styles.p].join(' '),
        span1: ['bold', styles.span].join(' '),
        span2: ['d-md-none', styles.span].join(' ')
    };

    return (
        <Layout>
            <Head>
                <title>{`${i18n.header} - Jorge Chaparro`}</title>
            </Head>
            <main className='container mx-auto content-page-container'>
                <div className={['p-4', styles.cvContainer].join(' ')}>

                    <section className="d-flex flex-column justify-content-center align-items-center mb-4">
                        {/* <img src={JorgePhoto} alt="Jorge Leonardo Chaparro Sarmiente pic" className={['mb-3', styles.img].join(' ')}></img> */}
                        <Image 
                            src={JorgePhoto}
                            className={['mb-3', styles.img].join(' ')}
                            alt="Picture of the author"
                        />
                        <h4 className={['bold', 'm-0', 'text-center', styles.h4].join(' ')}>Jorge Leonardo Chaparro Sarmiento</h4>
                        <p className={styling.pHead}>
                            <span className={styling.spanHead}>{i18n.aboutMe.mainInfo.birthDate}: </span>
                            <span className={styles.span}>{i18n.aboutMe.mainInfo.birthDateValue}</span>
                        </p>
                        <p className={styling.pHead}>
                            <span className={styling.spanHead}>{i18n.aboutMe.mainInfo.phoneNumber}: </span>
                            <span className={styles.span}>(+57) 3214876038</span>
                        </p>
                        <p className={styling.pHead}>
                            <span className={styling.spanHead}>E-mail: </span>
                            <span className={styles.span}>jorgechaparrosarmiento@gmail.com</span>
                        </p>
                        <span className={styles.span}>Bogotá, Colombia</span>
                        <a className={styles.a} href="https://www.linkedin.com/in/jorge-chaparro-sarmiento-345959160/" target="_blank">{i18n.aboutMe.mainInfo.linkedIn}</a>
                    </section>

                    <section className="row mb-3">
                        <h4 className={styling.h4}>{i18n.aboutMe.profile.title}</h4>
                        <aside className={['d-none d-md-flex col-md-3 flex-column align-items-center justify-content-center', styles.datesContainer].join(' ')}>
                            <h6 className={styles.h6}>{i18n.aboutMe.languages.title}</h6>
                            <span className={styles.span}>{i18n.aboutMe.languages.english}: {i18n.aboutMe.languages.englishLevel}</span>
                            <span className={styles.span}>{i18n.aboutMe.languages.spanish}: {i18n.aboutMe.languages.spanishLevel}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styles.p}>{i18n.aboutMe.profile.first}</p>
                            <p className={styles.p}>{i18n.aboutMe.profile.second}</p>
                            <p className={styles.p}>{i18n.aboutMe.profile.third}</p>
                            <p className={styles.p}>{i18n.aboutMe.profile.fourth}</p>
                        </aside>
                    </section>

                    <section className="row mb-3">
                        <h4 className={styling.h4}>{i18n.aboutMe.experience.title}</h4>

                        <aside className={styling.aside1}>
                            <span className={styles.span}>{i18n.aboutMe.experience.accenture.dateInit} -</span>
                            <span className={styles.span}>{i18n.aboutMe.experience.accenture.dateEnd}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <h6 className={styles.h6}>{i18n.aboutMe.experience.accenture.jobTitle}:</h6>
                            <p className={styling.p1}>
                                <i>{i18n.aboutMe.experience.accenture.dateInit} - {i18n.aboutMe.experience.accenture.dateEnd}</i>
                            </p>
                            <p className={styles.p}>{i18n.aboutMe.experience.accenture.description}:</p>
                            <ul>
                                <li className={styles.li}>{i18n.aboutMe.experience.accenture.task1}</li>
                                <li className={styles.li}>{i18n.aboutMe.experience.accenture.task2}</li>
                                <li className={styles.li}>{i18n.aboutMe.experience.accenture.task3}</li>
                                <li className={styles.li}>{i18n.aboutMe.experience.accenture.task4}</li>
                                <li className={styles.li}>{i18n.aboutMe.experience.accenture.task5}</li>
                            </ul>
                        </aside>

                        <aside className={styling.dates1}>
                            <span className={styles.span}>{i18n.aboutMe.experience.teleperformance.dateInit} -</span>
                            <span className={styles.span}>{i18n.aboutMe.experience.teleperformance.dateEnd}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <h6 className={styles.h6}>{i18n.aboutMe.experience.teleperformance.jobTitle}:</h6>
                            <p className={styling.p1}>
                                <i>{i18n.aboutMe.experience.teleperformance.dateInit} - {i18n.aboutMe.experience.teleperformance.dateEnd}</i>
                            </p>
                            <p className={styles.p}>{i18n.aboutMe.experience.teleperformance.description}</p>
                        </aside>

                        <aside className={styling.dates2}>
                            <span className={styles.span}>{i18n.aboutMe.experience.ibm.dateInit} -</span>
                            <span className={styles.span}>{i18n.aboutMe.experience.ibm.dateEnd}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <h6 className={styles.h6}>{i18n.aboutMe.experience.accenture.jobTitle}:</h6>
                            <p className={styling.p1}>
                                <i>{i18n.aboutMe.experience.ibm.dateInit} - {i18n.aboutMe.experience.ibm.dateEnd}</i>
                            </p>
                            <p className={styles.p}>{i18n.aboutMe.experience.accenture.description}:</p>
                            <ul>
                                <li className={styles.li}>{i18n.aboutMe.experience.ibm.task1}</li>
                                <li className={styles.li}>{i18n.aboutMe.experience.ibm.task2}</li>
                            </ul>
                        </aside>

                    </section>

                    <section className="row mb-3">
                        <h4 className={styling.h4}>{i18n.aboutMe.education.title}</h4>

                        <aside className={styling.aside1}>
                            <span className={styles.span}>2015 - 2020</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p2}>{i18n.aboutMe.education.santoTomas.programTitle}</p>
                            <p className={styling.p3}>{i18n.aboutMe.education.santoTomas.institution}</p>
                            <p className={styling.p4}>
                                <i>2015 - 2020</i>
                            </p>
                            <p className={styling.p3}>{i18n.aboutMe.education.santoTomas.description}</p>
                        </aside>

                        <aside className={styling.dates2}>
                            <span className={styles.span}>2017 - 1</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p2}>{i18n.aboutMe.education.uabc.programTitle}</p>
                            <p className={styling.p3}>{i18n.aboutMe.education.uabc.institution}</p>
                            <p className={styling.p4}>
                                <i>2017 - 1</i>
                            </p>
                            <p className={styling.p3}>{i18n.aboutMe.education.uabc.description}</p>
                        </aside>

                    </section>

                    <section className="row mb-3">
                        <h4 className={styling.h4}>{i18n.aboutMe.complementaryEducation.title}</h4>

                        <aside className={styling.aside1}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.aws.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.aws.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.aws.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.aws.date}</i>
                                </span>
                            </p>
                        </aside>

                        <aside className={styling.dates1}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.devops.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.devops.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.devops.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.devops.date}</i>
                                </span>
                            </p>
                        </aside>

                        <aside className={styling.dates1}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.nextU.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.nextU.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.nextU.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.nextU.date}</i>
                                </span>
                            </p>
                        </aside>

                        <aside className={styling.dates1}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.misionTIC.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.misionTIC.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.misionTIC.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.misionTIC.date}</i>
                                </span>
                            </p>
                        </aside>

                        <aside className={styling.dates1}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.watson.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.watson.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.watson.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.watson.date}</i>
                                </span>
                            </p>
                        </aside>

                        <aside className={styling.dates2}>
                            <span className={styles.span}>{i18n.aboutMe.complementaryEducation.sakura.date}</span>
                        </aside>
                        <aside className="col-12 col-md-9 p-3">
                            <p className={styling.p3}>
                                <span className={styling.span1}>{i18n.aboutMe.complementaryEducation.sakura.title}: </span>
                                <span className={styles.span}>{i18n.aboutMe.complementaryEducation.sakura.description} </span>
                                <span className={styling.span2}>
                                    <i>{i18n.aboutMe.complementaryEducation.sakura.date}</i>
                                </span>
                            </p>
                        </aside>

                    </section>

                    <section className="row mb-3">
                        <h4 className={styling.h4}>{i18n.aboutMe.techSkills.title}</h4>

                        <article>
                            <ul>
                                <li className={styles.li}>
                                    <span className={styling.span1}>{i18n.aboutMe.techSkills.technologies.title}: </span>
                                    <span className={styles.span}>{i18n.aboutMe.techSkills.technologies.description}</span>
                                </li>
                                <li className={styles.li}>
                                    <span className={styling.span1}>{i18n.aboutMe.techSkills.programmingLanguages.title}: </span>
                                    <span className={styles.span}>{i18n.aboutMe.techSkills.programmingLanguages.description}</span>
                                </li>
                                <li className={styles.li}>
                                    <span className={styling.span1}>{i18n.aboutMe.techSkills.platforms.title}: </span>
                                    <span className={styles.span}>{i18n.aboutMe.techSkills.platforms.description}</span>
                                </li>
                                <li className={styles.li}>
                                    <span className={styling.span1}>{i18n.aboutMe.techSkills.devices.title}: </span>
                                    <span className={styles.span}>{i18n.aboutMe.techSkills.devices.description}</span>
                                </li>
                            </ul>
                        </article>

                    </section>

                </div>
            </main>
        </Layout>
    );
}