import Modal from 'react-modal'
import { Container, TransactionTypeContainer } from './styles'
import incomeImg from '../../assets/income.svg'
import outComeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps{
  isOpen:boolean
  onRequestClose: () => void
}


export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){


  return(
    <Modal 
    isOpen={isOpen}   
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
      <button type='button' 
      onClick={onRequestClose} 
      className='react-modal-close'>
        <img src={closeImg} alt="fechar modal" />
      </button>
      <Container>
          <h2>Cadastrar nova transação</h2>
          <input type="text"  placeholder='Titulo'/>
          <input type='number' placeholder='Valor'/>

          <TransactionTypeContainer>

            <button
              type='button'
            >
              <img src={incomeImg} alt='' />
              <span>Entrada</span>
            </button>
            <button>
            <img src={outComeImg} alt='' />
                <span>Saida</span>
            </button>

          </TransactionTypeContainer>


          <input placeholder='Categoria'/>
          <button type='submit'>Cadastrar</button> 
      </Container>
    </Modal>
  )
}