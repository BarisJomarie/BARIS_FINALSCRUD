# Generated by Django 5.0.4 on 2024-07-09 19:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_item_business_address_item_business_telephone_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='father_lastname',
            new_name='father_surname',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='mother_lastname',
            new_name='mother_surname',
        ),
        migrations.RenameField(
            model_name='item',
            old_name='spouse_lastname',
            new_name='spouse_surname',
        ),
    ]
