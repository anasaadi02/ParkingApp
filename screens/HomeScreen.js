import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView,
  Modal,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";
import RobotSpinner from "./utils/robot";
import { useNavigation } from "@react-navigation/native";
import CustomAlert from "./CustomAlert";
import ChatScreen from "./utils/chatbot";

export default function HomeScreen({ route }) {
  const [language, setLanguage] = useState(route.params.language);
  const [openAlert, setOpenAlert] = useState(false);
  const navigation = useNavigation();

  const switchLangtoArb = () => {
    if (language === "Eng") setLanguage("Arb");
  };
  const switchLangtoEng = () => {
    if (language === "Arb") setLanguage("Eng");
  };
  const navigateToLogin = () => {
    setOpenAlert(false);
    navigation.navigate("Login");
  };

  function TextToImgScreen() {
    navigation.navigate("Images", { language });
  }
  function GoToLettersScreen() {
    navigation.navigate("Letters", { language });
    console.log("navigation succ");
  }
  function goToTextAudioScreen() {
    navigation.navigate("Text_Audio", { language });
  }
  function goToTranslationScreen() {
    navigation.navigate("Translation", { language });
  }
  function logout() {
    setOpenAlert(true);
  }
  function TextToImgScreen() {
    navigation.navigate("Images", { language });
  }
  function QuizzScreen() {
    navigation.navigate("Quizz", { language });
  }
  function gotochatbot() {
    navigation.navigate("chatbot", { language });
  }

  return (
    <ScrollView style={styles.Scroll}>
      <KeyboardAvoidingView style={styles.container}>
        <TouchableOpacity style={styles.headerContainer} onPress={gotochatbot}>
          <LinearGradient
            colors={["orange", "yellow"]} // Adjust gradient colors as needed
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.gradient}
          />
          <Image
            source={require("../assets/robot.png")} // Provide the path to your robot image
            style={styles.robotImage}
          />
          <Text style={styles.chatbotText}>
            {" "}
            {language == "Eng" ? "Chat bot" : "بوت الدردشة"}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            position: "relative",
            left: 150,
            top: 30,
          }}
        >
          <TouchableOpacity onPress={switchLangtoEng}>
            <Text style={styles.switchlang}>Eng /</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={switchLangtoArb}>
            <Text style={styles.switchlang}>Arb</Text>
          </TouchableOpacity>
        </View>
        {/* <TouchableOpacity style={styles.customHeader} onPress={gotochatbot()}>
          <CustomHeader />
        </TouchableOpacity> */}
        <Text style={styles.head}>
          {language == "Eng" ? "Activities List" : "لائحة الأنشطة"}
        </Text>
        <View style={styles.formContainer}>
          <Text style={styles.radioLabel}>
            {language == "Eng"
              ? "choose an option to continue learning"
              : "إختر احد الإختيارات للإستكمال التعلم  "}
          </Text>
        </View>
        {/* <RobotSpinner onPress={handleSpinnerClick} /> */}
        {/* {overlayVisible && (
          <View style={styles.overlayContainer}>
            <BlurView intensity={100} style={styles.blurView}>
              <View style={styles.overlayContent}>
                <Text style={styles.overlayText}>Hello, chat with me</Text>
                <TouchableOpacity
                  onPress={handleCloseOverlay}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeButtonText}>Close</Text>
                </TouchableOpacity>
              </View>
            </BlurView>
          </View>
        )} */}
        <TouchableOpacity
          style={[styles.button, { marginTop: 100 }]}
          onPress={() => GoToLettersScreen()}
        >
          <Text style={styles.buttonText}>
            {language == "Eng" ? "Lettres" : "الحروف"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={goToTranslationScreen}>
          <Text style={styles.buttonText}>
            {language == "Eng" ? "Translation" : "الترجمة"}
          </Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => TextToImgScreen()}
          style={[styles.button]}
        >
          <Text style={styles.buttonText}>
            {language == "Eng" ? "Images" : "الصور"}
          </Text>
        </TouchableOpacity> */}
        <TouchableOpacity onPress={goToTextAudioScreen} style={[styles.button]}>
          <Text style={styles.buttonText}>
            {language == "Eng" ? "Audios" : "الصوتيات"}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={QuizzScreen} style={[styles.button]}>
          <Text style={styles.buttonText}>
            Quiz
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={logout}
          style={[styles.button, styles.buttonOutline]}
        >
          <CustomAlert
            isVisible={openAlert}
            title={
              language == "Eng"
                ? "Are you shure of loging out"
                : "هل أنت متأكد من الخروج"
            }
            actionToAccept={() => navigateToLogin()}
            actionToDecline={() => setOpenAlert(false)}
            decline={language == "Eng" ? "decline" : "إلغاء"}
            buttonText={language == "Eng" ? "validate" : "تأكيد"}
          />
          <Text style={[styles.buttonText]}>
            {language == "Eng" ? "Logout" : "تسجيل الخروج"}
          </Text>
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Scroll: {
    // height: 100,
    flex: 1,
  },
  fixedSpinner: {
    position: "absolute",
    flex: 1,
  },
  switchlang: {
    fontWeight: "700",
    fontSize: 16,
    margin: 2,
  },
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 50,
  },

  head: {
    fontSize: 50,
    paddingBottom: 50,
    fontWeight: "bold",
    color: "orange",
    top: 50,
  },

  formContainer: {
    width: "80%",
  },

  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginBottom: 20,
    marginTop: 10,
    top: 50,
  },
  headerContainer: {
    position: "absolute",
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    left: 120,
    top: 2,
    // borderRadius: 20,
  },
  gradient: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    borderRadius: 10,
  },
  robotImage: {
    width: 40,
    height: 40,
    marginRight: 8,
  },
  chatbotText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },

  radioContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
  },

  radioLabel: {
    // fontWeight: "bold",
    marginRight: 10,
    marginTop: 5,
    top: 50,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },

  radioOption: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    marginRight: 10,
  },

  radioOptionLabel: {
    fontWeight: "bold",
    color: "orange",
  },

  radioOptionLabelSelected: {
    fontWeight: "bold",
    color: "white",
  },

  radioOptionSelected: {
    backgroundColor: "orange",
    color: "white",
  },

  button: {
    backgroundColor: "orange",
    width: "60%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 50,
  },

  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },

  buttonOutline: {
    backgroundColor: "red",
    marginTop: 20,
    marginBottom: 10,
    borderColor: "white",
    borderWidth: 2,
  },

  overlayContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
  },
  blurView: {
    width: "80%",
    borderRadius: 10,
    overflow: "hidden",
  },
  overlayContent: {
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  overlayText: {
    fontSize: 24,
    color: "white",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: "black",
  },

  // datepicker: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   alignItems: "flex-start",
  // },

  // dateNTime: {
  //   backgroundColor: "orange",
  //   marginLeft: 7,
  //   marginRight: 7,
  //   height: 40,
  //   width: "45%",
  //   borderRadius: 10,
  //   alignItems: "center",
  //   justifyContent: "center",
  // },
});
