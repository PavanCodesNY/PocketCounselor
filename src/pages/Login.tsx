import { IonButton, IonCard, IonCardContent, IonContent, IonFooter, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import React, { useEffect, useState } from 'react';
import { closeSharp, logInOutline, personCircleOutline } from 'ionicons/icons';
import PC from '../assets/pc.png'
import Intro from '../components/Intro';
import { Preferences } from '@capacitor/preferences';

const INTRO_KEY = 'intro-seen';
const Login: React.FC = () => {
    const router = useIonRouter();
    const [introSeen, setIntroSeen] = useState(true);

    useEffect(()=> {
        const checkStorage = async() =>{
            const seen = await Preferences.get({key:INTRO_KEY});
            console.log("Seen:", seen);
            setIntroSeen(seen.value === 'true');
        }
        checkStorage();
    }, [])
    const doLogin = (e: any) => {
        e.preventDefault();
        console.log("Register");
        console.log("Hello");
    };

    const finishIntro = async() => {
        console.log("Fin");
        setIntroSeen(true);
        Preferences.set({key:INTRO_KEY, value: 'true'})
    };

    const seeIntroAgain = () => {
        setIntroSeen(false);
        Preferences.remove({key:INTRO_KEY});
    };

    return (
        <>
        {!introSeen ? (
            <Intro onFinish={finishIntro}/>
        ) : 
        (
        <IonPage>
            <IonHeader>
                <IonToolbar color = {'secondary'}>
                    <IonTitle>Pocket Counselor</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent scrollY = {false} className="ion-padding">
                <div className='ion-text-center ion-padding'>
                <img src = {PC} alt = "PC Logo" width = {'50%'}></img>
                </div>
               <IonCard>
                <IonCardContent>
                    <form onSubmit={doLogin}>
                        <IonInput fill = "outline" label="Email" type = 'email' labelPlacement="floating" placeholder='bob@gmail.com'></IonInput>

                        <IonInput className = "ion-margin-top" fill = "outline" label="Password" type = 'password' labelPlacement="floating" placeholder='******'></IonInput>

                        <IonButton className = "ion-margin-top" type='submit' expand='block' color='primary'> Login <IonIcon icon = {logInOutline} slot="end"></IonIcon></IonButton>
                        
                        <IonButton routerLink = "/register" className = "ion-margin-top" expand='block' fill = "outline" color='secondary'> Create Account <IonIcon icon = {personCircleOutline}> </IonIcon> </IonButton>

                        <IonButton onClick={seeIntroAgain} size='small' className = "ion-margin-top" expand='block' fill='clear' color='medium'> Watch Intro Again</IonButton>
                    </form>
                </IonCardContent>
               </IonCard>
            </IonContent>
        </IonPage>
        )}
        </>
            
    );
};

export default Login;