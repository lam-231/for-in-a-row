import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useSettings } from '../context/SettingsContext';

const schema = yup.object().shape({
    player1Name: yup.string()
        .required("Ім'я обов'язкове")
        .min(2, "Мінімум 2 символи"),
    player2Name: yup.string()
        .required("Ім'я обов'язкове")
        .min(2, "Мінімум 2 символи"),
    rows: yup.number()
        .typeError('Має бути числом')
        .min(6, 'Мінімум 6 рядків')
        .max(12, 'Максимум 12 рядків'),
    cols: yup.number()
        .typeError('Має бути числом')
        .min(7, 'Мінімум 7 колонок')
        .max(12, 'Максимум 12 колонок'),
});

const SettingsForm = ({ onClose }) => {
    const { settings, updateSettings } = useSettings();

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        defaultValues: settings,
    });

    const onSubmit = (data) => {
        updateSettings(data);
        onClose();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="settings-form">
            <div className="form-group">
                <label>Гравець 1 (Червоний)</label>
                <input {...register('player1Name')} placeholder="Ім'я" />
                <p className="error">{errors.player1Name?.message}</p>
            </div>

            <div className="form-group">
                <label>Гравець 2 (Жовтий)</label>
                <input {...register('player2Name')} placeholder="Ім'я" />
                <p className="error">{errors.player2Name?.message}</p>
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label>Рядки (6-12)</label>
                    <input type="number" {...register('rows')} />
                    <p className="error">{errors.rows?.message}</p>
                </div>

                <div className="form-group">
                    <label>Колонки (7-12)</label>
                    <input type="number" {...register('cols')} />
                    <p className="error">{errors.cols?.message}</p>
                </div>
            </div>

            <button type="submit" className="save-btn">Зберегти налаштування</button>
        </form>
    );
};

export default SettingsForm;