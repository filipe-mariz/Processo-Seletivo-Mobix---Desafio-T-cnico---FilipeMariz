import React from 'react';
import '../styles/pages/principal.css'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Input from '../components/Inputs';

function Principal() {

  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const [open3, setOpen3] = React.useState(false);

  return (
    <div id="landing">
      <div className="wrapper">
        <table className="tabelone">
          <tr> 
            <td width="200px"></td>
            <td width="200px">Ver listagem</td>
            <td width="200px">Ver detalhes</td>
            <td width="200px">Criar</td>
            <td width="200px">Atualizar</td>
            <td width="200px">Deletar</td>
          </tr>
          <tr className="TabelHead">
            <td className="all">Todos</td>
            <Input />
          </tr>
          <tr className="modules">
            <td width="250px" className="modulo">
              Analise
              <IconButton className="icone" aria-label="expand row" size="medium" onClick={() => setOpen(!open)}>
                {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </td>
            <Input />
          </tr>
        </table>

        <Collapse in={open} timeout="auto" unmountOnExit>
          <table className="tabeltwo">
            <tr className="submodulo">
              <td width="270px">Análise de conta </td>
              <Input />
            </tr>

            <tr>
              <td>Análise de transação</td>
              <Input />
            </tr>
          </table>

        </Collapse>
        <table className="tabelone">
          <tr className="modules">
            <td width="250px" className="modulo">
              Contas
              <IconButton className="icone" aria-label="expand row" size="medium" onClick={() => setOpen1(!open1)}>
                {open1 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </td>
            <Input />
          </tr>
        </table>

        <Collapse in={open1}>
          <table className="tabeltwo">
            <tr className="analise">

              <td width="270px" >Clientes</td>
              <Input />
            </tr>

            <tr>
              <td>Transação</td>
              <Input />
            </tr>

            <tr>
              <td>Contas digitais</td>
              <Input />
            </tr>
          </table>

        </Collapse>
        <table className="tabelone">
          <tr className="modules">
            <td width="250px" className="modulo">
              Customização
              <IconButton className="icone" aria-label="expand row" size="medium" onClick={() => setOpen2(!open2)}>
                {open2 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </td>
            <Input />
          </tr>
        </table>

        <Collapse in={open2}>
          <table className="tabeltwo">
            <tr className="analise">

              <td width="270px" >Limites e horários</td>
              <Input />
            </tr>

            <tr>
              <td>Tarifas</td>
              <Input />
            </tr>

            <tr>
              <td>Tarifas personalizadas</td>
              <Input />
            </tr>

            <tr>
              <td>Contas</td>
              <Input />
            </tr>
          </table>

        </Collapse>

        <table className="tabelone">
          <tr className="modules">
            <td width="250px" className="modulo">
              Financeiro
              <IconButton className="icone" aria-label="expand row" size="medium" onClick={() => setOpen3(!open3)}>
                {open3 ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
              </IconButton>
            </td>
            <Input />
          </tr>
        </table>
        <Collapse in={open3}>
          <table className="tabeltwo">
            <tr className="analise">

              <td width="270px" >Entradas</td>
              <Input />
            </tr>

          </table>
        </Collapse>
        <br /> <br />
        <button className="cadastrar">Cadastrar</button>
        <br /> <br /><br />

      </div>

    </div>
  )
}

export default Principal;

