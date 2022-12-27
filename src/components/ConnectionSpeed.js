import React from "react";
import "../../node_modules/react-internet-meter/dist/index.css";
import { ReactInternetSpeedMeter } from "react-internet-meter";
import App from '../components/css/App.css'
import { IonCard, IonHeader } from "@ionic/react";
function ConnectionSpeed() {
  const [checkSpeed, SetCheckSpeed] = React.useState(
    "Finding internet speed."
  );
  return (
    <div>
      <IonHeader className="header">Netwrok Speed Demo</IonHeader>
      <ReactInternetSpeedMeter
        txtSubHeading="Internet connection is slow"
        outputType="" // "alert"/"modal"/"empty"
        customClassName={null}
        pingInterval={2000} // milliseconds
        txtMainHeading="Opps..."
        thresholdUnit="megabyte" // "byte" , "kilobyte", "megabyte"
        threshold={50}
        imageUrl="https://i.postimg.cc/sft772VP/speedometer.png"
        downloadSize="1561257" //bytes
        callbackFunctionOnNetworkDown={(data) =>
          console.log(`Internet speed : ${data}`)
        }
        callbackFunctionOnNetworkTest={(data) => SetCheckSpeed(data)}
      />
    <IonCard className="card">
    <div className="card-body mt-4">
        <h1>Netwrok Speed</h1>
        <span className="display-1">{checkSpeed} MB/s</span>
      </div>
    </IonCard>
    </div>
  );
}
export default ConnectionSpeed;
