import { IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonPage, IonTitle, IonToolbar, useIonRouter } from '@ionic/react';
import { checkmarkCircleOutline, checkmarkDoneCircleOutline, logInOutline, personCircleOutline } from 'ionicons/icons';
import React from 'react';

const Register: React.FC = () => {
    const doRegister = (e: any) => {
        e.preventDefault();
        console.log("Register");
        router.goBack();
    }
    const router = useIonRouter();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color = {'secondary'}>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref='/' />
                    </IonButtons>
                    <IonTitle>Create Account</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent className="ion-padding">
               <IonCard>
                <IonCardContent>
                    <form onSubmit={doRegister}>
                        <IonInput fill = "outline" label="Email" type = 'email' labelPlacement="floating" placeholder='bob@gmail.com'></IonInput>

                        <IonInput className = "ion-margin-top" fill = "outline" label="Password" type = 'password' labelPlacement="floating" placeholder='******'></IonInput>

                        <IonInput className = "ion-margin-top" fill = "outline" label="Confirm Password" type = 'password' labelPlacement="floating" placeholder='******'></IonInput>

                        <IonButton className = "ion-margin-top" type='submit' expand='block' color='secondary'> Create an account <IonIcon icon = {checkmarkDoneCircleOutline} slot="end"></IonIcon></IonButton>
                        
                    </form>
                </IonCardContent>
               </IonCard>
            </IonContent>
            

            {/* <IonFooter>
                <IonToolbar>
                    <IonTitle> Contact US!! </IonTitle>
                </IonToolbar>
            </IonFooter> */}
        </IonPage>
    );
};

export default Register;