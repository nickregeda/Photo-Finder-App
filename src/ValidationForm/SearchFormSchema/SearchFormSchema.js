import * as Yup from "yup";

const searchFormSchema = Yup.object().shape({
    query: Yup.string()
        .required("I need some text to find photos you want"),
});
export default searchFormSchema;