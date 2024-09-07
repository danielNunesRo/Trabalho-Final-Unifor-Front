import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import './RegisterPage.css'; 

const RegisterPage = () => {
    

  
    const [formData, setFormData] = useState({
    login: '',
    password: '',
    role: 'USER', // Ajuste para o formato correto
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('https://trabalho-final-unifor-1.onrender.com/auth/register', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log('Registration successful:', response.data);
    } catch (err) {
      console.error('Registration error:', err);
      setError('Ocorreu um erro durante o registro. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={6} className="register-paper">
        <Typography variant="h4" gutterBottom>
          Registro
        </Typography>
        <form onSubmit={handleSubmit} className="register-form">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Login"
                name="login"
                value={formData.login}
                onChange={handleChange}
                placeholder="Digite seu login"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                label="Senha"
                name="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Digite sua senha"
              />
            </Grid>
          </Grid>
          <input type="hidden" name="role" value={formData.role} />
          {error && <Typography color="error" align="center" className="error-message">{error}</Typography>}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disabled={loading}
            className="submit-button"
          >
            {loading ? 'Registrando...' : 'Registrar'}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default RegisterPage;
