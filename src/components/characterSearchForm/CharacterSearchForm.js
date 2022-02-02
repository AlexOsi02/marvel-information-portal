import './characterSearchForm.scss';
import {Formik, Form, Field, ErrorMessage as FormikErrorMessage} from "formik";
import useMarvelService from "../../services/MarvelService";
import {useState} from "react";
import ErrorMessage from "../errorMessage/ErrorMessage";
import {Link} from "react-router-dom";

const CharacterSearchForm = () => {
    const [char, setChar] = useState(null);
    const {loading, error, getCharacterByName, clearError} = useMarvelService();

    const onCharLoaded = (char) => {
        setChar(char);
    }

    const updateChar = (name) => {
        clearError();

        getCharacterByName(name)
            .then(onCharLoaded)
    }

    const errorMessage = error ?
        <div className="error"><ErrorMessage/></div> : null;
    const results = !char ? null : char.length > 0 ?
        <div className="characterSearchForm__wrapper">
            <div className="characterSearchForm__success">There is! Visit {char[0].name} page?</div>
            <Link to={`/characters/${char[0].id}`} className="button button__secondary">
                <div className="inner">To page</div>
            </Link>
        </div> :
        <div className="characterSearchForm__error">
            The character was not found. Check the name and try again
        </div>;

    return (
        <div className="characterSearchForm">
            <Formik
                initialValues={{charName: ''}}
                validate={values => {
                    const errors = {};
                    if (!values.charName) {
                        errors.charName = 'This field is required';
                    }
                    return errors;
                }}
                onSubmit={({charName}) => {
                    updateChar(charName);
                }}
            >
                <Form>
                    <label className="characterSearchForm__title" htmlFor={"charName"}>Or find a character by
                        name:</label>
                    <div className="characterSearchForm__wrapper">
                        <Field
                            id={"charName"}
                            name="charName"
                            type="text"
                            className="characterSearchForm__input"
                            placeholder={"Enter name"}/>
                        <button
                            type="submit"
                            className="button button__main"
                            disabled={loading}
                        >
                            <div className="inner">FIND</div>
                        </button>
                    </div>
                    <FormikErrorMessage className="characterSearchForm__error" name="charName" component="div"/>
                </Form>
            </Formik>
            {results}
            {errorMessage}
        </div>
    )
}

export default CharacterSearchForm;