import React, {useState} from 'react';
import {Modal} from 'react-native'
import { useForm } from 'react-hook-form'

import {InputForm} from '../../components/Form/InputForm'
import {Button} from '../../components/Form/Button'
import {TransactionTypeButton} from '../../components/Form/TransactionTypeButton'
import {CategorySelectButton} from '../../components/Form/CategorySelectButton'
import {CategorySelect} from '../CategorySelect'

import * as S from './styles';

interface FormData {
    name: string;
    amount: string;
}

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });

    const {
        control,
        handleSubmit
    } = useForm(); 


    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    function handleRegister(form: FormData){
        const data ={
            name: form.name,
            amount: form.amount,
            transactionType,
            category: category.key
        }

        console.log(data)
    }

    return (
        <S.Container>
            <S.Header>
                <S.Title>Cadastro</S.Title>
            </S.Header>
            <S.Form>
                <S.Fields>
                    <InputForm
                        name='name'
                        control={control}
                        placeholder="Nome"
                        />
                    <InputForm
                        name='amount'
                        control={control}
                        placeholder="Preço"
                        />
                    <S.TransactionTypes>
                    <TransactionTypeButton
                        type='up'
                        title='Income'
                        onPress={() => handleTransactionTypeSelect('up')}
                        isActive={transactionType === 'up'}
                    />
                    <TransactionTypeButton
                        type='down'
                        title='Outcome'
                        onPress={() => handleTransactionTypeSelect('down')}
                        isActive={transactionType === 'down'}
                    />
                    </S.TransactionTypes>
                    <CategorySelectButton
                        title={category.name}
                        onPress={handleOpenSelectCategoryModal}
                    />
                </S.Fields>
                <Button title="Enviar" onPress={handleSubmit(handleRegister)}/>
            </S.Form>

            <Modal visible={categoryModalOpen}>
                <CategorySelect
                    category={category}
                    setCategory={setCategory}
                    closeSelectCategory={handleCloseSelectCategoryModal}
                />
            </Modal>
        </S.Container>
    );
}
