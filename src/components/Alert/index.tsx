import { IAlert } from "./interface";
import { Alert } from "react-native";


const AlertSingle = (title: string, text: string) => {
  Alert.alert(title, text);
};

const AlertConfirm = (title: string, text: string, func: any, item?: string) => {
  Alert.alert(
    title,
    text,
    [
      {
        text: "Não",
        style: "cancel"
      },
      { text: "Sim", onPress: () => func(item) }
    ]
  );
};

export { AlertSingle, AlertConfirm };