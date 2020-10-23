$(function(){
    'use strick';


    // link submit page scripts

    // step complitation function
    let stepComplete = (currentStep,nextStep,heading,subHeading,step,task)=>{
        // heading.html(`Step -0${stepFlag}`)
        currentStep.on('submit',function(e){
            e.preventDefault();
            currentStep.hide(200);
            nextStep.show(200);
            heading.html(`Step -0${step}`)
            subHeading.html(task)
        })
    }

    // this is step form function
    let stepForm = (stepOne,stepTwo,stepThree,lastStepform,Heading,subHead)=>{
        if(!$(stepOne) || !$(stepTwo) || !$(stepThree) || !$(Heading))return;
        let stepOneForm = $(stepOne);
        let stepTwoForm = $(stepTwo);
        let stepThreeForm = $(stepThree);
        let lastStep = $(lastStepform);
        let heading = $(Heading);
        let subHeading = $(subHead);


        stepTwoForm.hide()
        stepThreeForm.hide()
        stepComplete(stepOneForm,stepTwoForm,heading,subHeading,2,'Please choose a link type for continue')
        stepComplete(stepTwoForm,stepThreeForm,heading,subHeading,3,'Please complete the form below')
        stepComplete(stepThreeForm,lastStep,heading,subHeading,4,'Please Checkout for paid submission')
    }


    let stepThreeFormDataView = ()=>{
        let form = $('#step_three');
        let checkOutForm = $('#checkOutForm');
        checkOutForm.hide()
        
    }
    stepThreeFormDataView()
    stepForm('#step_one','#step_two','#step_three','#checkOutForm','.link_submit_heading h3','.link_submit_heading span')

    
    // show output on submit link page
    let submitLinkShowOutput = ()=>{
        // push categoryValue to everywere
        let categoryValue = $('#selectLinkCat')
        $('.CategoryOut').html(categoryValue.val())
        categoryValue.on('input',function(e){
            e.preventDefault();
            $('.CategoryOut').html(categoryValue.val())
        })


        // change output by submiting the form
        let stepThreeForm = $('#step_three');
        let linkTitle = $('#linkTitle');
        let linkUrl = $('#linkUrl');
        let descripionText = $('#descripionText');
        let ownerName = $('#ownerName');
        let ownerEmail = $('#ownerEmail');
        stepThreeForm.on('submit',function(e){
            e.preventDefault();
            $('.link_title_out').text(linkTitle.val())
            $('.link_url_out').text(linkUrl.val())
            $('.des_out').text(descripionText.val())
            $('.name_out').text(ownerName.val())
            $('.emailOut').text(ownerEmail.val())

        })
    }
    
    submitLinkShowOutput()



    // text counting of sort description
    let shotDes = $('#sortDes');
    let textLimit = 250;

    function textChange(){
        let textLength = shotDes.val().length;
        let bakiAche = textLimit - textLength;
        $('.writed').text(textLength)
        $('.limitOfDes').text(bakiAche)
    }

    textChange()
    $('#sortDes').on('keyup change',function(e){
        e.preventDefault()
        textChange()
    })


    
})