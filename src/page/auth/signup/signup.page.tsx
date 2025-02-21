import { Link } from "expo-router";
import { View } from "react-native";
import { Button, Divider, TextInput, Text } from "react-native-paper";
import { styles } from "./signup.style";
import { Colors } from "@/src/theme/colors";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupRequest } from "@/src/store/slices/authSlice";
import { Formik } from "formik";
import { IState } from "./signup.type";
import { signupValidationSchema } from "@/src/utils/validation/auth";
import Loader from "@/src/components/organisms/loader/loader.organisms";
import { RootState } from "@/src/store/store";

export default function SignUp() {
  const dispatch = useDispatch();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmpasswordVisible, setConfirmPasswordVisible] = useState(false);
  const { loading } = useSelector((state: RootState) => state.auth);

  const handleSignup = (values: IState) => {
    const payload = {
      name: values.name,
      email: values.email,
      password: values.password,
    };

    dispatch(signupRequest(payload as never));
  };

  return (
    <View style={styles.mainContainer}>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={signupValidationSchema}
        onSubmit={handleSignup}
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
                Sign Up
              </Text>
              <Text variant="labelLarge" style={styles.lable}>
                Create a new Account
              </Text>
            </View>
            <Divider bold />
            <View style={styles.inputView}>
              <TextInput
                label="Name"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor="grey"
                left={<TextInput.Icon icon="account" />}
                onChangeText={handleChange("name")}
                onBlur={handleBlur("name")}
                value={values.name}
              />
              {touched.name && errors.name && (
                <Text style={styles.errorText}>{errors.name}</Text>
              )}

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

              <TextInput
                label="Confirm Password"
                mode="outlined"
                outlineColor="transparent"
                activeOutlineColor="grey"
                left={<TextInput.Icon icon="lock" />}
                secureTextEntry={!confirmpasswordVisible}
                right={
                  <TextInput.Icon
                    icon={confirmpasswordVisible ? "eye-off" : "eye"}
                    onPress={() =>
                      setConfirmPasswordVisible(!confirmpasswordVisible)
                    }
                  />
                }
                onChangeText={handleChange("confirmPassword")}
                onBlur={handleBlur("confirmPassword")}
                value={values.confirmPassword}
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text style={styles.errorText}>{errors.confirmPassword}</Text>
              )}
            </View>
            <Button
              mode="contained"
              buttonColor={Colors.orangeRed}
              textColor={Colors.white}
              style={styles.button}
              onPress={handleSubmit as never}
            >
              Sign Up
            </Button>

            <View style={styles.alreadyAccount}>
              <Text style={styles.loginText}>Already have an account?</Text>
              <Link href="/auth/login">
                <Text style={styles.logIn}>Login</Text>
              </Link>
            </View>
          </View>
        )}
      </Formik>
      <Loader animating={loading} />
    </View>
  );
}
