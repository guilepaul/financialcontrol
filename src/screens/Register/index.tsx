import React, {useState} from 'react';
import {Modal} from 'react-native'

import {Input} from '../../components/Form/Input'
import {Button} from '../../components/Form/Button'
import {TransactionTypeButton} from '../../components/Form/TransactionTypeButton'
import {CategorySelectButton} from '../../components/Form/CategorySelectButton'
import {CategorySelect} from '../CategorySelect'

import * as S from './styles';

export function Register() {
    const [transactionType, setTransactionType] = useState('');
    const [categoryModalOpen, setCategoryModalOpen] = useState(false);

    const [category, setCategory] = useState({
        key: 'category',
        name: 'Categoria'
    });


    function handleTransactionTypeSelect(type: 'up' | 'down') {
        setTransactionType(type)
    }

    function handleCloseSelectCategoryModal() {
        setCategoryModalOpen(false);
    }

    function handleOpenSelectCategoryModal() {
        setCategoryModalOpen(true);
    }

    return (
        <S.Container>
            <S.Header>
                <S.Title>Cadastro</S.Title>
            </S.Header>
            <S.Form>
                <S.Fields>
                    <Input
                        placeholder="Nome"
                        />
                    <Input
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
                <Button title="Enviar" />
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
