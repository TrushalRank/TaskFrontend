import { Link, useRouter } from "expo-router";
import { View } from "react-native";
import { Button, Divider, TextInput, Text } from "react-native-paper";
import { Colors } from "@/src/theme/colors";
import { useState } from "react";
import { styles } from "./login.style";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest } from "@/src/store/slices/authSlice";
import { Formik } from "formik";
import { loginValidationSchema } from "@/src/utils/validation/auth";
import { RootState } from "@/src/store/store";
import Loader from "@/src/components/organisms/loader/loader.organisms";

export default function Login() {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleLogin = (values: IState) => {
    dispatch(loginRequest(values as never));
  };

  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={loginValidationSchema}
        onSubmit={handleLogin}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View style={styles.container}>
            <View style={styles.headerView}>
              <Text variant="displayLarge" style={styles.title}>
                Welcome!
              </Text>
              <Text variant="labelLarge" style={styles.lable}>
                Sign in to continue
              </Text>
            </View>
            <Divider bold />
            <View style={styles.inputView}>
              <TextInput
                label="Email"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor="grey"
                left={<TextInput.Icon icon="email" />}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
                autoCapitalize="none"
              />
              {touched.email && errors.email && (
                <Text style={styles.errorText}>{errors.email}</Text>
              )}
              <TextInput
                label="Password"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor="grey"
                left={<TextInput.Icon icon="lock" />}
                secureTextEntry={!passwordVisible}
                right={
                  <TextInput.Icon
                    icon={passwordVisible ? "eye-off" : "eye"}
                    onPress={() => setPasswordVisible(!passwordVisible)}
                  />
                }
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
              {touched.password && errors.password && (
                <Text style={styles.errorText}>{errors.password}</Text>
              )}
            </View>
            <Button
              mode="contained"
              buttonColor={Colors.orangeRed}
              textColor={Colors.white}
              style={styles.button}
              onPress={handleSubmit as never}
            >
              Log in
            </Button>
            <View style={styles.noAccount}>
              <Text style={styles.signupText}>Don't have an account?</Text>
              <Link href="/auth/signup">
                <Text style={styles.signUp}>Sign Up</Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
      <Loader animating={loading} />
    </View>
  );
}
