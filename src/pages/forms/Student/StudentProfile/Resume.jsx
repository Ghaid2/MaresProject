import React, { useState, useEffect } from 'react';
import StudentHeader from '../StudentHome/StudentHeader/StudentHeader';
import Sidebar from '../StudentHome/Sidebar';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Autocomplete from '@mui/material/Autocomplete';
import Stack from '@mui/material/Stack';


const Resume = () => {
    const [formData, setFormData] = useState({
        selfDescription: '',
        cvFile: null,
        certificatesFile: null,
        college: '',
        specialization: '',
        graduationDate: '',
        language: ''
    });

    const [levels, setLevels] = useState([]);

    useEffect(() => {
        // Simulated data for levels from 'المستوى الأول' to 'المستوى العاشر'
        const data = [
            { label: 'المستوى الأول' },
            { label: 'المستوى الثاني' },
            { label: 'المستوى الثالث' },
            { label: 'المستوى الرابع' },
            { label: 'المستوى الخامس' },
            { label: 'المستوى السادس' },
            { label: 'المستوى السابع' },
            { label: 'المستوى الثامن' },
            { label: 'المستوى التاسع' },
            { label: 'المستوى العاشر' }
        ];
        setLevels(data);
    }, []);

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        setFormData({ ...formData, [name]: files ? files[0] : value });
    };

    const handleSave = async () => {
        // Code to handle form submission, including file uploads
    };

    const [languages, setLanguages] = useState([]);

    useEffect(() => {
        // هنا يجب عليك استخدام fetch أو axios أو أي آلية لجلب البيانات من الخادم
        // في هذا المثال، سنفترض أنه تم جلب البيانات وتخزينها في متغير languages
        const fetchedLanguages = [
            { label: 'العربية - مبتدئ' },
            { label: 'العربية - متوسط' },
            { label: 'العربية - متقدم' },
            { label: 'الإنجليزية - مبتدئ' },
            { label: 'الإنجليزية - متوسط' },
            { label: 'الإنجليزية - متقدم' },
        ];
        setLanguages(fetchedLanguages);
    }, []); // تم تمرير قيمة فارغة للتأكد من أن هذا الكود يتم تنفيذه مرة واحدة فقط عند تحميل الصفحة


    return (
        <div style={{ height: '100vh', overflow: 'auto' }}>
            <StudentHeader />
            <Sidebar />
            <Grid container direction="column" justifyContent="flex-start" alignItems="center" style={{ minHeight: '100%' }}>
                <h1 style={{ fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}>سيرتي الذاتية:</h1>
                <h3>ملخص عني</h3>
                <TextareaAutosize
                    aria-label="self-description"
                    placeholder="اكتب وصفًا عن نفسك..."
                    name="selfDescription"
                    value={formData.selfDescription}
                    onChange={handleChange}
                    style={{ width: '50%', minHeight: '100px', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                />
                <h3>تحميل السيرة الذاتية</h3>
                <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    style={{ fontFamily: 'Tajawal, sans-serif', marginBottom: '20px', backgroundColor: 'mediumaquamarine' }}
                >
                    <input
                        type="file"
                        hidden
                        name="cvFile"
                        onChange={handleChange}
                    />
                </Button>
                <h3>تحميل الشهادات</h3>

                <Button
                    variant="contained"
                    component="label"
                    startIcon={<CloudUploadIcon />}
                    style={{ fontFamily: 'Tajawal, sans-serif', marginBottom: '20px', backgroundColor: 'mediumaquamarine' }}
                >
                    <input
                        type="file"
                        hidden
                        name="certificatesFile"
                        onChange={handleChange}
                    />
                </Button>
                <h1>التعليم:</h1>
                <Autocomplete
                    disablePortal
                    id="combo-box-level"
                    options={levels}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}> المستوى الدراسي</span>} />}
                    style={{ width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                    onChange={(event, value) => setFormData({ ...formData, level: value ? value.label : '' })}
                />
                
                <Autocomplete
                    disablePortal
                    id="combo-box-college"
                    options={[{ label: 'كلية الحاسبات' }]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}> الكلية</span>} />}
                    style={{ width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                    onChange={(event, value) => setFormData({ ...formData, college: value ? value.label : '' })}
                />
                
                <Autocomplete
                    disablePortal
                    id="combo-box-specialization"
                    options={[
                        { label: 'نظم المعلومات' },
                        { label: 'علوم الحاسب الآلي' },
                        { label: 'هندسة علم البرمجيات' },
                        { label: 'هندسة الشبكات والحاسب' },
                        { label: 'الأمن السيبراني' },
                        { label: 'علم البيانات' },
                    ]}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}> التخصص</span>} />}
                    style={{ width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                    onChange={(event, value) => setFormData({ ...formData, specialization: value ? value.label : '' })}
                />
                
                <TextField
                    id="graduationDate"
                    name="graduationDate"
                    label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}> تاريخ التخرج</span>} 
                    type="date"
                    value={formData.graduationDate}
                    onChange={handleChange}
                    style={{ width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
                
                <Stack spacing={3} sx={{ width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}>
            <Autocomplete
                multiple
                id="tags-outlined"
                options={languages}
                getOptionLabel={(option) => option.label}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label={<span style={{ fontFamily: 'Tajawal, sans-serif' }}>اللغة</span>}
                        placeholder="اللغة"
                    />
                )}
            />
        </Stack>

                
                <Button
                    onClick={handleSave}
                    variant="contained"
                    style={{ backgroundColor: 'mediumaquamarine', color: 'black', width: '50%', fontFamily: 'Tajawal, sans-serif', marginBottom: '20px' }}
                >
                    حفظ
                </Button>
            </Grid>
        </div>
    );
};

export default Resume;


