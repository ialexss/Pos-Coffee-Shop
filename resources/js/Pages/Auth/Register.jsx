import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        first_lastname: '',
        second_lastname: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });

        alert("Usuario Creado Correctamente");
    };

    return (
        <div className=" p-5 flex flex-col items-center justify-center pt-10 sm:justify-center bg-coffee h-[95vh] rounded-lg sm:pt-0">
            <div className="mt-6 w-full overflow-hidden bg-gray-100 px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg" >
                <Head title="Register" />

                <form onSubmit={submit}>
                    <div>
                        <InputLabel htmlFor="name" value="Nombre" />

                        <TextInput
                            id="name"
                            name="name"
                            value={data.name}
                            className="mt-1 block w-full"
                            autoComplete="name"
                            isFocused={true}
                            onChange={(e) => setData('name', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div>
                        <InputLabel htmlFor="first_lastname" value="Primer apellido" />

                        <TextInput
                            id="first_lastname"
                            name="first_lastname"
                            value={data.first_lastname}
                            className="mt-1 block w-full"
                            autoComplete="first_lastname"
                            isFocused={true}
                            onChange={(e) => setData('first_lastname', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>


                    <div>
                        <InputLabel htmlFor="second_lastname" value="Segundo apellido" />

                        <TextInput
                            id="second_lastname"
                            name="second_lastname"
                            value={data.second_lastname}
                            className="mt-1 block w-full"
                            autoComplete="second_lastname"
                            isFocused={true}
                            onChange={(e) => setData('second_lastname', e.target.value)}
                            required
                        />

                        <InputError message={errors.name} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="email" value="Email" />

                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            className="mt-1 block w-full"
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                            required
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel htmlFor="password" value="Password" />

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) => setData('password', e.target.value)}
                            required
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <InputLabel
                            htmlFor="password_confirmation"
                            value="Confirmar Password"
                        />

                        <TextInput
                            id="password_confirmation"
                            type="password"
                            name="password_confirmation"
                            value={data.password_confirmation}
                            className="mt-1 block w-full"
                            autoComplete="new-password"
                            onChange={(e) =>
                                setData('password_confirmation', e.target.value)
                            }
                            required
                        />

                        <InputError
                            message={errors.password_confirmation}
                            className="mt-2"
                        />
                    </div>

                    <div className="mt-4 flex items-center justify-end">

                        <PrimaryButton className="ms-4" disabled={processing}>
                            Registrar
                        </PrimaryButton>
                    </div>
                </form>
            </div>

        </div>
    );
}
